// import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection, onSnapshot,
    addDoc, query, where,
    orderBy, serverTimestamp,
} from 'firebase/firestore'

//   const firebaseConfig = {
//     apiKey: "AIzaSyCYN5ordAEmdqJ1FRyckWrnZTefkFiESes",
//     authDomain: "devs-5b8b7.firebaseapp.com",
//     projectId: "devs-5b8b7",
//     storageBucket: "devs-5b8b7.appspot.com",
//     messagingSenderId: "1088314394643",
//     appId: "1:1088314394643:web:48ed4e0a5784a5287dd7e6",
//     measurementId: "G-175TL5R6HX"
//   };



  // init firebase
// initializeApp(firebaseConfig);
import { config } from './config'
// init services
const db = getFirestore()
const chatCol = collection(db, 'chats')

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chats');
        this.unsub;
    }
    async addChat(message) {
      const now = new Date();
      try {
        const response = await addDoc(chatCol, {
          message,
          username: this.username,
          room: this.room,
          created_at: serverTimestamp(),
        });
        return response;
      } catch (error) {
        console.error('Error adding chat:', error);
      }
    }
    getChats(callback) {
      const newChatq = query(chatCol, where('room', '==', this.room), orderBy('created_at'));

      // Unsubscribe from the previous query, if any
      if (this.unsub) {
        this.unsub();
      }

      // this.unsub = onSnapshot(chatq, (snapshot) => {
        this.unsub = onSnapshot(newChatq, (snapshot) => {

        snapshot.docChanges().forEach((change) => {

          if (change.type === 'added') {
            // Update UI
            callback(change.doc.data());
          }
        });
      });
    }
    
    
    updateName(username){
        this.username = username;
        localStorage.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        this.getChats(() => {});
    }
}   
export default Chatroom 
