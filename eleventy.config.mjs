// Plugins
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function (eleventyConfig) {
    // Copy assets
    eleventyConfig.addPassthroughCopy("assets");
    
    // Format date
    eleventyConfig.addFilter('blogDate', blogDate);

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