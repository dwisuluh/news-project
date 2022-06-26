const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave:false,
  publicPatch: process.nextTick.NODE_ENV === "production" ? "/news-project/" : "/"
});
