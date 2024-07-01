const ProjectCard = require('./src/_includes/components/projectCard');
module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy("src/test.html");
	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/css/");
	eleventyConfig.addPassthroughCopy("src/js/");
	eleventyConfig.addPassthroughCopy("src/plugins/");
	
	
	eleventyConfig.addWatchTarget("src/test.html");
	eleventyConfig.addWatchTarget("src/plugins/");
	eleventyConfig.addWatchTarget("src/js/");
	eleventyConfig.addWatchTarget("src/css");
	eleventyConfig.addWatchTarget("src/assets");
	
	eleventyConfig.addCollection("projects", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/projects/**/*.*");
	});

	eleventyConfig.addShortcode('projectCard', ProjectCard);
	
	return {
		dir : {
			input: 'src',
			includes: '_includes',
			output: '_site',
		},
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine : 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	};
}