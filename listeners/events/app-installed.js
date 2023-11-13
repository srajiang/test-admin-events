const appInstalledCallback = async ({ event }) => {
 console.log('An App Installed Event Happened!', event)
};

module.exports = { appInstalledCallback };
