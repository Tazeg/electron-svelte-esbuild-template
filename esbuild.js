const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte') // esbuild plugin svelte

function showUsage () {
  console.log('USAGE')
  console.log('node esbuild.js dev')
  console.log('node esbuild.js prod')
  process.exit(0)
}

if (process.argv.length < 3) {
  showUsage()
}

if (![ 'dev', 'prod' ].includes(process.argv[2])) {
  showUsage()
}

// production mode, or not
const production = (process.argv[2] === 'prod')

// esbuild watch in dev mode to rebuild out files
let watch = false
if (!production) {
  watch = {
    onRebuild(error) {
      if (error) console.error('esbuild: Watch build failed:', error.getMessage())
      else console.log('esbuild: Watch build succeeded')
    }
  }
}

// esbuild build options
// see: https://esbuild.github.io/api/#build-api
const options = {
  entryPoints: ['./src/main.js'],
  bundle: true,
  watch,
  external: ['electron'],
  format: 'esm',
  minify: production,
  sourcemap: false,
  outfile: './electron/bundle/bundle.js', // and bundle.css
  plugins: [
    sveltePlugin()
  ]
}

// esbuild dev + prod
esbuild.build(options).catch(() => {
  process.exit(1)
})
