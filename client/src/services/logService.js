import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://39cd57c13f1646ceb18c6c84056789b0@sentry.io/1723539"
  });
}

function log(error) {
  Sentry.captureException(error);
  console.log(error);
}

// Interface of logService has two methods -- init and log
export default {
  init,
  log
};