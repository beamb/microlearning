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
let allAlarms;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    let uid = user.uid;
    db.collection("users")
      .doc(uid)
      .onSnapshot(function (doc) {
        uWebsites = doc.data().userSettings.webPages.websites;
      });
    chrome.tabs.onActiveChanged.addListener(() => {
      chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === "complete") {
          chrome.tabs.getSelected(null, (tab) => {
            let url = tab.url;
            let pathArray = url.split("/");
            let newUrl = pathArray[0] + "//" + pathArray[2] + "/*";
            chrome.alarms.getAll((alarms) => {
              allAlarms = alarms;
              if (
                Array.isArray(alarms) &&
                alarms.length > 0 &&
                !alarms.some((alarm) => alarm.name === newUrl)
              ) {
                chrome.alarms.clearAll();
              }
            });
            if (typeof uWebsites !== "undefined") {
              if (uWebsites.length > 0) {
                uWebsites.forEach((uw) => {
                  if (uw.URL === newUrl && !uw.isDisabled) {
                    if (allAlarms.length > 0) {
                      if (!allAlarms.some((a) => a.name === newUrl)) {
                        setAlarm(uw.URL, uw.interval);
                      }
                    } else {
                      setAlarm(uw.URL, uw.interval);
                    }
                  }
                });
              }
            } else {
              alert(
                "Oh no! Something went wrong and no interruptions were scheduled.\nDouble-check your settings and don't forget to hit 'Save & back' when done."
              );
            }
          });
        }
      });
    });
  }
});

function setAlarm(url, interval) {
  let minutes = parseFloat(interval);
  chrome.alarms.create(url, { delayInMinutes: minutes });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.alarms.clear(alarm.name);
  let msg =
    "Hey! It's time to practice.\nClick on the 'Practice.now()' icon to start quizzing!";
  alert(msg);
});
