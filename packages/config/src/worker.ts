import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [
    {
      id: 'raksmart_us2_https_8443',
      name: 'RakSmart US2 HTTPS (8443)',
      method: 'HEAD',
      target: 'https://us2.tenshinran.com:8443/',
      expectedCodes: [200, 403, 404],
      timeout: 10000,
      link: false,
    },
    {
      id: 'us_vps_subscription_8443',
      name: 'US VPS HTTPS Gateway (8443)',
      method: 'HEAD',
      target: 'https://sub.tenshinran.com:8443/traffic/',
      expectedCodes: [200],
      timeout: 10000,
      link: false,
    },
  ],
  notification: {
    timeZone: 'Asia/Shanghai',
    gracePeriod: 3,
    skipNotificationIds: ['raksmart_us2_https_8443'],
    skipErrorChangeNotification: true,
  },
};
