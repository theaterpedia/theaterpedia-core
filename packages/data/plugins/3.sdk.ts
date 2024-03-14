import { defineNuxtPlugin } from '#app';
import { initSDK, buildModule } from '@vue-storefront/sdk';
import { OdooModule } from '@erpgap/odoo-sdk';
import type { OdooModuleType } from '@erpgap/odoo-sdk';

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  const sdkConfig = {
    odoo: buildModule<OdooModuleType>(OdooModule, {
      apiUrl: 'http://localhost:3000/api/odoo/',
      ofetch: useFetch,
    }),
  };

  return {
    provide: {
      sdk: () => initSDK<typeof sdkConfig>(sdkConfig),
    },
  };
});