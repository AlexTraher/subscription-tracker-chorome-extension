import { getPlatformData, supportedPlatforms } from './platforms.js';

const getHandleVisitFn = (platformName) => () => {
  chrome.storage.sync.set({ [platformName]: Date.now() });
}

chrome.runtime.onInstalled.addListener(async () => {

  const data = await getPlatformData();
  const newSave = {
    ...supportedPlatforms.reduce((acc, { name: platform }) => ({ ...acc, [platform]: null }), {}),
    ...data,
  };
  chrome.storage.sync.set(newSave, function() {
    console.log("Saved netflix seen");
  });

  supportedPlatforms.forEach(({ name, urlMatch }) => {
    chrome.webNavigation.onCompleted.addListener(getHandleVisitFn(name), { url: [{ hostEquals: urlMatch }] });
  })

  
  
});