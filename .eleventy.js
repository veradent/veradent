module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("CNAME")
  eleventyConfig.addPassthroughCopy("banners")
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("docs")
  eleventyConfig.addPassthroughCopy("gallery")
  eleventyConfig.addPassthroughCopy("images")
  eleventyConfig.addPassthroughCopy("js")
}
