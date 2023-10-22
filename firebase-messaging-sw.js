importScripts(
  "https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  projectId: "friendlychat-63ceb",
  appId: "1:767896634631:web:583389fdef523e823fb1a2",
  storageBucket: "friendlychat-63ceb.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyB9S9hVhUmbHzLw4f2V6kOZHOEWwWX1JIE",
  authDomain: "friendlychat-63ceb.firebaseapp.com",
  messagingSenderId: "767896634631",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
