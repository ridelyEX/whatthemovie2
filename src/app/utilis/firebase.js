import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPiTfYmPC7kAkOhdLHPtsbpS0hnik7h9I",
  authDomain: "test1-75969.firebaseapp.com",
  databaseURL: "https://test1-75969-default-rtdb.firebaseio.com",
  projectId: "test1-75969",
  storageBucket: "test1-75969.appspot.com",
  messagingSenderId: "763685484232",
  appId: "1:763685484232:web:2d5b5804c7ebac9a3417fd",
  measurementId: "G-M121974ZQN"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

async function addUsr(data){
  console.log(data);
  const docRef = await addDoc(collection(db, "UsrMovies"), data);
  console.log("si se agrego");
  return docRef.id;
}

export default addUsr;