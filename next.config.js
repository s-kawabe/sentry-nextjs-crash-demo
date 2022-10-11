const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains: [],
  },
  swcMinify: true,

  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    // 🙆‍♂️ 開発者ツールにソースマップが表示されてしまうのを防ぐ（Sentryへのソースマップの送信はsentry.propertiesの設定によって行われる）
    hideSourceMaps: true, 

    // This option will automatically provide performance monitoring for Next.js
    // data-fetching methods and API routes, making the manual wrapping of API
    // routes via `withSentry` redundant.
    // 🙆‍♂️ これをONにすると手動でAPI RoutesをwithSentryで囲ってエラー監視対象にしなくても勝手に対象になるっぽい
    autoInstrumentServerFunctions: true,
  }
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  //🙆‍♂️ sourceMapのuploadに関するログをビルド時に表示させるためfalseに設定 (初期設定はtrue)
  silent: false, // Suppresses all log
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);