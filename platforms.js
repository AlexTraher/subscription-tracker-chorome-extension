export const supportedPlatforms = [
  'Netflix',
  'Prime'
];

export const getPlatformData = () => new Promise((resolve) => {
  chrome.storage.sync.get(supportedPlatforms, (data) => {
    resolve(data);
  });
});