// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://092e863fb1d34158897bd8c9dc1e7aff@o4503958852468736.ingest.sentry.io/4503958884646912',
  // Adjust this value in production, or use tracesSampler for greater control
  // 🙆‍♂️ pefermance関連の設定, 1.0だと画面遷移のたびに毎回traceを送るようになるので上限を超えてしまうかも
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
