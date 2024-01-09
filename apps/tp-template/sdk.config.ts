import { SdkModule, sdkModule } from '@crearis/crearis-boilerplate-sdk';

export default defineSdkConfig(({ buildModule }) => ({
  commerce: buildModule<SdkModule>(sdkModule),
}));