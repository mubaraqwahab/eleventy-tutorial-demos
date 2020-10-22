module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src"
    }
  };
};
