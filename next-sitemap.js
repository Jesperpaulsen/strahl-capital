module.exports = {
  siteUrl: process.env.SITE_URL || 'https://strahl.no',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.5,
  transform: async (config, path) => {
    // only create changefreq along with path
    // returning partial properties will result in generation of XML field with only returned values.
    /* if (customLimitedField(path)) {
      // This returns `path` & `changefreq`. Hence it will result in the generation of XML field with `path` and  `changefreq` properties only.
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: 'weekly',
      }
    } */
    const customChangeFreqAndPriority = customUrls[path]
    if (customChangeFreqAndPriority) {
      return {
        loc: path,
        changeFreq: customChangeFreqAndPriority.changeFreq,
        priority: customChangeFreqAndPriority.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined
      }
    }

    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }
  }
}

const customUrls = {
  '/': { changeFreq: 'daily', priority: 1 }
}
