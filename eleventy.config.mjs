// Plugins
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import fg from "fast-glob";

export default async function (eleventyConfig) {
    // Copy assets
	eleventyConfig.addPassthroughCopy({ "_assets/**/*.{jpg,jpeg,png}": "_assets/images" });	
	eleventyConfig.addPassthroughCopy({ "node_modules/lightbox2/dist/images/*": "_assets/images" });	
	eleventyConfig.addPassthroughCopy({ "**/*.pdf": "_assets/pdf" });
	eleventyConfig.addPassthroughCopy("_assets/fonts/");
	
	
    eleventyConfig.addPassthroughCopy({ "_assets/css/main.css": "_assets/css/main.css" });
	eleventyConfig.addPassthroughCopy({ "node_modules/simpledotcss/simple.min.css": "_assets/css/simple.min.css" });
	eleventyConfig.addPassthroughCopy({ "node_modules/lightbox2/dist/css/lightbox.min.css": "_assets/css/lightbox.min.css" });	

	eleventyConfig.addPassthroughCopy({ "node_modules/lightbox2/dist/js/lightbox-plus-jquery.min.js": "_assets/js/lightbox-plus-jquery.min.js" });	

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

		// Create collection for Durant les travaux covers
		eleventyConfig.addCollection('durantlestravaux_couv', (collection) => {
			return fg.sync(['**/durantlestravaux/*']);
		});

	// Create preview, ending if with <!-- more -->. Preview stored in page.excerpt
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: '<!-- more -->'
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
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["avif", "webp", "jpeg"],

		// output image widths
		widths: [200, 500, 1000],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",				
			},
			pictureAttributes: {}
		},
	});
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