const path = require('path')
const { copy } = require('esbuild-plugin-copy')


require("esbuild").context({
  entryPoints: ["application.js"],
  bundle: true,
  sourcemap: true,
  publicPath: 'assets',
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  loader: {
        '.js': 'jsx',
        '.png': 'file',
        '.svg': 'file'
      },
  plugins: [
    copy({
      resolveFrom: path.join(process.cwd(), 'public/assets'),
      assets: [
        {
          from: [
            './node_modules/tinymce/**/*.js',
            './node_modules/tinymce/**/*.css'
          ],
          to: ['./tinymce'],
          keepStructure: true
        }
      ]
    })
  ],
  minify: process.argv.includes("--minify")
}).then(context => {
  if (process.argv.includes("--watch")) {
    // Enable watch mode
    context.watch()
  } else {
    // Build once and exit if not in watch mode
    context.rebuild().then(result => {
      context.dispose()
    })
  }
}).catch(() => process.exit(1))
// const path = require('path');

// require("esbuild").build({
//   entryPoints: ["application.js"],
//   bundle: true,
//   outdir: path.join(process.cwd(), "app/assets/builds"),
//   absWorkingDir: path.join(process.cwd(), "app/javascript"),
//   loader: {
//     '.js': 'jsx',
//     '.png': 'file',
//     '.svg': 'file'
//   },
//   // custom plugins will be inserted is this array
//   plugins: [],
// }).catch(() => process.exit(1));

// esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=assets