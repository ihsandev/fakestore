import { collection, deleteDoc, doc, getDocs, increment, setDoc, updateDoc } from "firebase/firestore";
import { useFirebase } from "~~/composable/useFirebase";

export const getByCollection = async (col: string) => {
  const { firestoreDb } = useFirebase()
  const colRef = collection(firestoreDb, col);

  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
};

export const addCartToCollection = async (col:string, id:string, data: any) => {
  const { firestoreDb } = useFirebase()
  data.timestamp = new Date().getTime()
  const newProduct = {...data}
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await setDoc(docRef, newProduct, {merge: true})
  }
}

export const updateCart = async (col:string, id:string, qty:number) => {
  const { firestoreDb } = useFirebase()
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await updateDoc(docRef, {
      qty: increment(qty)
    })
  }
}

export const deleteCart = async (col:string, id:string) => {
  const { firestoreDb } = useFirebase()
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await deleteDoc(docRef)
  }
}