// Plugins
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function (eleventyConfig) {
    // Copy assets
    eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("sadmin");
    
    // Format date
    eleventyConfig.addFilter('blogDate', blogDate);

	// Sort with `Array.sort`
	eleventyConfig.addCollection("headernav", function (headernav) {
		return headernav.getAll().sort(function (a, b) {
			//return a.date - b.date; // sort by date - ascending
			return b.date - a.date; // sort by date - descending
			//return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
			//return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
		});
	});

    // RSS plugin
    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/feed.xml",
		collection: {
			name: "blog",
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "fr",
			title: "Blog des éditions du samedi",
			subtitle: "Actualité des éditions du samedi",
			base: "https://editionsdusamedi.fr/blog/",
            author: {
				name: "les éditions du samedi"
			}
		}
	});
}

// Function for date formatting
function blogDate(input) {
    return `${new Date(input).toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
}