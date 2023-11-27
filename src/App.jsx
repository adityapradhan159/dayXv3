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
  apiKey: "AIzaSyCwI2v0w-qCoPdaSVhykSLUnSQT7NDXdJE",
  authDomain: "dayxv3-62e28.firebaseapp.com",
  projectId: "dayxv3-62e28",
  storageBucket: "dayxv3-62e28.appspot.com",
  messagingSenderId: "918267910750",
  appId: "1:918267910750:web:8c18f451a8843ace4032cf",
  measurementId: "G-XG04FGQ3P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

  const { showRegisterPopUp } = useSelector((state) => state.showPopUp)
 

  return (
    <>
    {showRegisterPopUp == true && <JoinWaitlist />}
    {/* {<JoinWaitlist />} */}
      <LandingPage/>
    </>
  )
}

export default App
