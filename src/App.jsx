import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LandingPage from './Pages/LandingPage/LandingPage';
import { useSelector } from 'react-redux'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import JoinWaitlist from './Modals/JoinWaitlist/JoinWaitlist';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtRGE_RuHCHEskpBZf48o1t4G-HG1DYqA",
  authDomain: "dayx-prod.firebaseapp.com",
  projectId: "dayx-prod",
  storageBucket: "dayx-prod.appspot.com",
  messagingSenderId: "38703449413",
  appId: "1:38703449413:web:f87fb52c7ae2e3f3112a2c",
  measurementId: "G-3TP3PWBBMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

  const { showRegisterPopUp } = useSelector((state) => state.showPopUp)
 

  return (
    <>
    {showRegisterPopUp.show == true && <JoinWaitlist />}
    {/* {<JoinWaitlist />} */}
      <LandingPage/>
    </>
  )
}

export default App
