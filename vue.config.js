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
      title: 'About Dr. Arti Jindal',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'specialities': {
      entry: './src/pages/Specialities/main.js',
      template: 'public/index.html',
      title: 'Specialities',
      chunks: ['chunk-vendors', 'chunk-common', 'specialities']
    },
    'access': {
      entry: './src/pages/Access/main.js',
      template: 'public/index.html',
      title: 'Access',
      chunks: ['chunk-vendors', 'chunk-common', 'access']
    },
  }
}
