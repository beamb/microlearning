chrome.tabs.onActiveChanged.addListener(() => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
      chrome.alarms.getAll((alarms) => {
        chrome.tabs.getSelected(null, (tab) => {
          let url = tab.url;
          let pathArray = url.split("/");
          let newUrl = pathArray[0] + "//" + pathArray[2] + "/*";
          if (
            alarms.length > 0 &&
            !alarms.some((alarm) => alarm.name === newUrl)
          ) {
            chrome.alarms.clearAll((wasCleared) => {
              if (wasCleared) {
                console.log("Alarms were cleared");
              } else {
                console.log("Something went wrong when clearing alarms");
              }
            });
          } else if (alarms.length === 0) {
            console.log(newUrl);
            if (newUrl.match("https://www.netflix.com/*")) {
              console.log("Alarm will be set");
              setAlarm(newUrl, 1);
            }
          }
        });
      });
    }
  });
});

const checkForValidUrl = (tabURL) => {
  for (var i = 0, iLen = urlArray.length; i < iLen; i++) {
    if (tabURL.indexOf(urlArray[i]) > -1) {
      break; // halt for loop
    }
  }
};

const setAlarm = (url, interval) => {
  let minutes = parseFloat(interval);
  chrome.alarms.create(url, { delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
};

chrome.storage.sync.get(["minutes"], (item) => {
  chrome.alarms.create(item.name, { delayInMinutes: item.minutes });
});

chrome.alarms.onAlarm.addListener(() => {
  let msg =
    "Hi Beatrice Verzier! It's time to practice.\nClick on the 'Practice.now()' icon to start quizzing!";
  alert(msg);
});
