import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from './firebaseConfig';

const db = getFirestore(app);

async function guardarPedido(pedido) {
  await addDoc(collection(db, "pedidos"), pedido);
}