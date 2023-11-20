const appLifecycleCallback = async ({ event }) => {
    console.log('An App Lifecycle Event Happened!', event)
};

module.exports = { appLifecycleCallback };
