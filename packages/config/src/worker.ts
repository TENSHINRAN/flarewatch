import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 1,
  monitors: [
    {
      id: 'us_vps_subscription_8443',
      name: 'US VPS Subscription (8443)',
      method: 'HEAD',
      target: 'https://sub.tenshinran.com:8443/',
      expectedCodes: [200],
      timeout: 10000,
      link: false,
    },
  ],
};
