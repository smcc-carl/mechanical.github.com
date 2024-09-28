module.exports = function(eleventyConfig) {

    // eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/asset");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addCollection("equipment", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/equipment/**/*.md");
    });
    
    eleventyConfig.addCollection("reports", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/reports/**/*.md");
    });
    


    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };