const defaultStylesConfig = [
  {
    css: {
      output: {
        comments: false
      },
      sourceMap: true
    }
  }
]

module.exports = {
  type: "react-app",
  webpack: {
    extra: {
      devtool: "cheap-source-map"
    },
    styles: {
      css: defaultStylesConfig,
      stylus: defaultStylesConfig
    }
  }
}
