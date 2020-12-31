export const supportedPlatforms = [
  { name: 'netflix', label: 'Netflix', urlMatch: 'www.netflix.com' },
  { name: 'prime', label: 'Amazon Prime', urlMatch: 'www.amazon.co.uk' },
];

export const getPlatformData = () => new Promise((resolve) => {
  const supportedPlatformNames = supportedPlatforms.map(({ name }) => name);
  chrome.storage.sync.get(supportedPlatformNames, (data) => {
    resolve(data);
  });
});