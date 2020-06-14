const admin = require("firebase-admin");
const firebaseFile = require("./firebase.json");

const firebaseConfig = admin.initializeApp({
  credential: admin.credential.cert(firebaseFile),
  databaseURL: "https://trucker-53e7e.firebaseio.com/",
});

module.exports = firebaseConfig;