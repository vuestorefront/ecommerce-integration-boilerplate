import { apiClientFactory } from '@vue-storefront/core';
import { Setttings, Endpoints } from './types';

function onCreate(settings: Setttings) {
  return {
    config: settings,
    client: {}
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {

  }
});

export {
  createApiClient
};
