importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDEbwurMemGg1YQsJo8z0qqcI7gBEMkHGQ",
  authDomain: "a15-tornamant.firebaseapp.com",
  projectId: "a15-tornamant",
  messagingSenderId: "766765271787",
  appId: "1:766765271787:web:02b34933e1b0b6db0c4cae"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const n = payload && payload.notification ? payload.notification : {};
  const d = payload && payload.data ? payload.data : {};
  const title = n.title || d.title || 'Update';
  const options = {
    body: n.body || d.body || '',
    icon: n.icon || d.icon || undefined,
    data: d
  };
  self.registration.showNotification(title, options);
});
