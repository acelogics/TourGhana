// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJj10z37yYCX9pQucOGOhND0G_LQ8duVg",
    authDomain: "semesterproject-4d568.firebaseapp.com",
    projectId: "semesterproject-4d568",
    storageBucket: "semesterproject-4d568.appspot.com",
    messagingSenderId: "915828369991",
    appId: "1:915828369991:web:07ec9147f8f45cae595f62",
    measurementId: "G-0805M2VVVJ"
};




// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;



const analytics = getAnalytics(app);
