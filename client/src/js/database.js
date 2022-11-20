import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

const initdb = async () => 
  console.log("initdb has been run")
  openDB('jate_db', 1, {

    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  })

// TODO: Add logic to a method that accepts some content and adds it to the databas
export const putDb = async (content) => {
  console.log('PUT to the database');
  const contactDb = await openDB('jate_db', 1);
  const tx = contactDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({content});
  const result = await request;
  console.log('🚀 - data saved to the database', result)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const contactDb = await openDB('jate_db', 1);
  const tx = contactDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  const values = result.map(function(item) {
      return item['content']
    })
  const index = ((result.length)-1)
  const finalResult = values[index];
  console.log(finalResult)
  return finalResult;
};

initdb();