module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("readableDate", (/** @type {Date} */ dateObj) => {
    return dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
  });

  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
