import { IonApp, IonButton, IonPage } from "@ionic/react";
import React from "react";
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCy2e2EvKk7T0uxwffnsxlL6d3l8-dyaGk",
    authDomain: "pl-test-a479f.firebaseapp.com",
    projectId: "pl-test-a479f",
    storageBucket: "pl-test-a479f.appspot.com",
    messagingSenderId: "1009486328790",
    appId: "1:1009486328790:web:7d310ab7a066b39c9baa77",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const handleLogin = async () => {
    const auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence)
      .then(() =>
        signInWithEmailAndPassword(auth, "test@test.com", "test1234")
          .then((creds) => {
            alert("User signed in" + JSON.stringify(creds));
          })
          .catch((err) => {
            alert("error" + JSON.stringify(err));
          })
      )
      .catch((err: any) => {
        alert(
          "Firebase Persistance setting error - SignIn" + JSON.stringify(err)
        );
      });
  };

  const handleRefresh = () => {
    const auth = getAuth(app);
    auth.currentUser
      ?.getIdToken(true)  //* This is failing in native(ios and android) but working in web
      .then((value) => {
        alert("Refresh token---> " + value);
      })
      .catch((err) => alert("Refresh token failed -> " + JSON.stringify(err)));
  };

  return (
    <IonApp>
      <IonPage>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <IonButton onClick={handleLogin}>Login</IonButton>
          <IonButton onClick={handleRefresh}>Refresh</IonButton>
        </div>
      </IonPage>
    </IonApp>
  );
}

export default App;
