module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/asset");






    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };