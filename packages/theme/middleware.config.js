module.exports = {
  integrations: {
    <% INTEGRATION %>: {
      location: '@vue-storefront/<% INTEGRATION %>-api/server',
      configuration: {}
    }
  }
};
