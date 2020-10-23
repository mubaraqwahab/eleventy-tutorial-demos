module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("readableDate", function (dateObj) {
    return dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
