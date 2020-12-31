import { getPlatformData, supportedPlatforms } from './platforms.js';
chrome.runtime.onInstalled.addListener(async () => {

  const data = await getPlatformData();
  const newSave = {
    ...supportedPlatforms.reduce((acc, platform) => ({ ...acc, [platform]: null }), {}),
    ...data,
    Netflix: Date.now(),
  };

  chrome.storage.sync.set(newSave, function() {
    console.log("Saved netflix seen");
  });
  
});