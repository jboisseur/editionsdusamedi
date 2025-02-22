// Plugins
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
    // Copy assets
	eleventyConfig.addPassthroughCopy({ "**/*.{jpg,jpeg,png}": "_assets/img" });	
	eleventyConfig.addPassthroughCopy({ "**/*.pdf": "_assets/pdf" });
	eleventyConfig.addPassthroughCopy("_assets/fonts/");
	
	
    eleventyConfig.addPassthroughCopy({ "_assets/css/main.css": "_assets/css/main.css" });
	eleventyConfig.addPassthroughCopy({ "node_modules/simpledotcss/simple.min.css": "_assets/css/simple.min.css" });

	eleventyConfig.addPassthroughCopy("sadmin");

    // Format date
    eleventyConfig.addFilter('blogDate', blogDate);
	eleventyConfig.addFilter('withoutYear', withoutYear);

	// AddCollections
		// Returns headernav items, sorted by order
		eleventyConfig.addCollection('headernav', (collection) => {
		return collection
			.getFilteredByTags("headernav")
			.sort((a, b) => (Number(a.data.order) > Number(b.data.order) ? 1 : -1));
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

	// Images plugin
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
}

// Date formatting
	// 25 juil. 2015
	function blogDate(input) {
		return `${new Date(input).toLocaleString("fr-FR", {
		year: "numeric",
		month: "short",
		day: "numeric",
		})}`;
	}

	// 25 juillet
	function withoutYear(input) {
		return `${new Date(input).toLocaleString("fr-FR", {
		month: "long",
		day: "numeric",
		})}`;
	}

// Use njk rather than liquid (add "templateEngineOverride: njk,md" in frontmatter)
export const config = {
	markdownTemplateEngine: "njk",
};