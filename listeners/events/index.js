const { appInstalledCallback } = require('./app-installed');

module.exports.register = (app) => {
  app.event('app_installed', appInstalledCallback)
};
