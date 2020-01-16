module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("banners")
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("gallery")
  eleventyConfig.addPassthroughCopy("images")
  eleventyConfig.addPassthroughCopy("js")
}
