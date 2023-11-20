const { appLifecycleCallback } = require('./app-lifecycle');

module.exports.register = (app) => {
  app.event('app_installed', appLifecycleCallback);
  app.event('app_uninstalled_team', appLifecycleCallback);
};
