if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = {
    provider: "local",
    providerOptions: {},
  };
} else if (process.env.NODE_ENV === "production") {
  module.exports = {
    provider: "local",
    providerOptions: {},
  };
}
