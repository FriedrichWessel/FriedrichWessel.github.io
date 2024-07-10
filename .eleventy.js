const ProjectCard = require('./src/_includes/components/projectCard');
module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy("src/cv.html");
	eleventyConfig.addPassthroughCopy("src/test.html");
	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/css/");
	eleventyConfig.addPassthroughCopy("src/js/");
	eleventyConfig.addPassthroughCopy("src/plugins/");
	
	
	eleventyConfig.addWatchTarget("src/cv.html");
	eleventyConfig.addWatchTarget("src/test.html");
	eleventyConfig.addWatchTarget("src/plugins/");
	eleventyConfig.addWatchTarget("src/js/");
	eleventyConfig.addWatchTarget("src/css");
	eleventyConfig.addWatchTarget("src/assets");
	
	eleventyConfig.addCollection("projects", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/projects/**/*.*");
	});

	eleventyConfig.addCollection("pages", function(collectionApi) {
		return collectionApi.getFilteredByGlob("src/pages/**/*.*");
	});

	eleventyConfig.addCollection("education", function(collectionApi) {
		return collectionApi.getAll().filter(function(item) {
		  return (item.data.tagGroup && item.data.tagGroup.includes("education"));
		}).sort(function(a, b) {
			return new Date(b.data.date) - new Date(a.data.date);
		  });;
	  });

	  eleventyConfig.addCollection("navbar", function(collectionApi) {
		return collectionApi.getAll().filter(function(item) {
		  return (item.data.tagGroup && item.data.tagGroup.includes("navbar"));
		}).sort(function(a, b) {
			return new Date(b.data.date) - new Date(a.data.date);
		  });;
	  });

	  eleventyConfig.addCollection("career", function(collectionApi) {
		return collectionApi.getAll().filter(function(item) {
		  return (item.data.tagGroup && item.data.tagGroup.includes("career"));
		}).sort(function(a, b) {
			return new Date(b.data.date) - new Date(a.data.date);
		  });;
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