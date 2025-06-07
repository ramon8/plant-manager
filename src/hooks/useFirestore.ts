import { useCallback, useState } from 'react';
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface DocumentWithId {
  id?: string;
  [key: string]: unknown;
}

export const useFirestore = <T extends DocumentWithId>(collectionPath: string) => {
  const [data, setData] = useState<T[]>([]);

  const get = useCallback(async () => {
    const snap = await getDocs(collection(db, collectionPath));
    const docs = snap.docs.map(d => ({ ...(d.data() as T), id: d.id } as T));
    setData(docs);
    return docs;
  }, [collectionPath]);

  const post = useCallback(async (value: Omit<T, 'id'>) => {
    const docRef = await addDoc(collection(db, collectionPath), value);
    return docRef.id;
  }, [collectionPath]);

  const put = useCallback(async (id: string, value: Partial<T>) => {
    await updateDoc(doc(db, collectionPath, id) as any, value as any);
  }, [collectionPath]);

  const remove = useCallback(async (id: string) => {
    await deleteDoc(doc(db, collectionPath, id));
  }, [collectionPath]);

  return { data, get, post, put, remove };
};
