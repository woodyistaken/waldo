const cssModulesPlugin = require("esbuild-css-modules-plugin");

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/main.js",
    plugins: [cssModulesPlugin()],
  })
  .catch(() => process.exit(1));