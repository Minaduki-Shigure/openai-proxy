//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/**': {
      proxy: 'https://api.openai.com/**'
    }
  }
});
