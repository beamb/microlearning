const firebaseConfig = {
  apiKey: "AIzaSyD5szbyWcdHYNfIUObkFeQMD8GukWctsvI",
  authDomain: "microlearning-app-08122020.firebaseapp.com",
  databaseURL: "https://microlearning-app-08122020.firebaseio.com",
  projectId: "microlearning-app-08122020",
  storageBucket: "microlearning-app-08122020.appspot.com",
  messagingSenderId: "444024438264",
  appId: "1:444024438264:web:af715ed09c455e147faa0d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let uWebsites;
let userName;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    userName = user.displayName;
    let uid = user.uid;
    db.collection("users")
      .doc(uid)
      .onSnapshot(function (doc) {
        uWebsites = doc.data().userSettings.webPages.websites;
      });
    chrome.tabs.onActiveChanged.addListener(() => {
      chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === "complete") {
          chrome.alarms.getAll((alarms) => {
            chrome.tabs.getSelected(null, (tab) => {
              let url = tab.url;
              let pathArray = url.split("/");
              let newUrl = pathArray[0] + "//" + pathArray[2] + "/*";
              if (
                Array.isArray(alarms) &&
                alarms.length &&
                !alarms.some((alarm) => alarm.name === newUrl)
              ) {
                chrome.alarms.clearAll(() => {});
              }
              if (alarms.length === 0) {
                uWebsites.forEach((uw) => {
                  if (uw.URL === newUrl && !uw.isDisabled) {
                    setAlarm(uw.URL, uw.interval);
                  }
                });
              }
            });
          });
        }
      });
    });
  }
});

function setAlarm(url, interval) {
  let minutes = parseFloat(interval);
  chrome.alarms.create(url, { delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
}

chrome.storage.sync.get(["minutes"], (item) => {
  chrome.alarms.create(item.name, { delayInMinutes: item.minutes });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.alarms.clear(alarm.name, () => {});
  let msg =
    "Hi " +
    userName +
    "! It's time to practice.\nClick on the 'Practice.now()' icon to start quizzing!";
  alert(msg);
});
