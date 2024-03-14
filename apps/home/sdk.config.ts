// import { SdkModule, sdkModule } from '@crearis/crearis-boilerplate-sdk';
import { OdooModule } from '@erpgap/odoo-sdk'

export default defineSdkConfig(({ buildModule, middlewareUrl }) => ({
  // commerce: buildModule(sdkModule),
  odoo: buildModule(OdooModule, { apiUrl: 'http://localhost:3000/api/odoo/', ofetch: useFetch }),
}))
