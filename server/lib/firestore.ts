import { collection, deleteDoc, doc, getDocs, increment, query, setDoc, updateDoc, where, writeBatch } from "firebase/firestore";
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

export const addDocument= async (col:string, id:string, data: any) => {
  const { firestoreDb } = useFirebase()
  data.timestamp = new Date().getTime()
  const newProduct = {...data}
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await setDoc(docRef, newProduct, {merge: true})
  }
}

export const updateQtyDocument = async (col:string, id:string, qty:number) => {
  const { firestoreDb } = useFirebase()
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await updateDoc(docRef, {
      qty: increment(qty)
    })
  }
}

export const updateDocument = async (col:string, id:string, updateData: any) => {
  const { firestoreDb } = useFirebase()
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await updateDoc(docRef, updateData)
  }
}

export const deleteDocument = async (col:string, id:string) => {
  const { firestoreDb } = useFirebase()
  const docRef = doc(firestoreDb, col, id)
  if(id) {
    await deleteDoc(docRef)
  }
}

export const deleteDocumentByUser = async (col:string, userId:string) => {
  const { firestoreDb } = useFirebase()
  const docRef = doc(firestoreDb, col, userId)
  if(userId) {
    await deleteDoc(docRef)
  }
}

export const deleteByUserDocument = async (col:string, userId:string | number) => {
  const { firestoreDb } = useFirebase()
  const colRef = collection(firestoreDb, col);
  const q = query(colRef, where("userId", "==", Number(userId)));
  const batch = writeBatch(firestoreDb)

  const snapshot = await getDocs(q);

  Array.from(snapshot.docs).map((docSnap) => {
    const docRef = doc(firestoreDb, col, docSnap.id)
    batch.delete(docRef)
  });

  await batch.commit();
}