module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
