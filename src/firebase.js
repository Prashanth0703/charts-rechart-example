import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj8FzWnpSgJoQqlOAQMPVqjPjfltb_oyo",
    authDomain: "login-page-889a3.firebaseapp.com",
    projectId: "login-page-889a3",
    storageBucket: "login-page-889a3.appspot.com",
    messagingSenderId: "104693557589",
    appId: "1:104693557589:web:1fadef1b21d83aa16667dc",
    measurementId: "G-03QRXGH7BQ",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
