import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCV7cZ4ksKiOTshqnb-srbbOGw7kKby0o8",
    authDomain: "fastfod-brisas-de-venecia.firebaseapp.com",
    projectId: "fastfod-brisas-de-venecia",
    storageBucket: "fastfod-brisas-de-venecia.appspot.com",
    messagingSenderId: "831666512057",
    appId: "1:831666512057:web:fastfod-brisas-de-venecia"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase inicializado");

export { db };