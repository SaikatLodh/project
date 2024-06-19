import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnjws8mfT1OZ5V-9zd2bGpOydpFMBKa0M",
    authDomain: "project-88833.firebaseapp.com",
    projectId: "project-88833",
    storageBucket: "project-88833.appspot.com",
    messagingSenderId: "498658127772",
    appId: "1:498658127772:web:ea64c4186dd59068f42259",
    measurementId: "G-K9JCXJG2QF"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { fireDB, auth };