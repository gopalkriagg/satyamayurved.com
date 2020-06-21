module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'products': {
      entry: './src/pages/Products/main.js',
      template: 'public/index.html',
      title: 'Products',
      chunks: ['chunk-vendors', 'chunk-common', 'products']
    },
  }
}
