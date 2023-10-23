import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, query, where,
    orderBy, serverTimestamp, getDoc,
    updateDoc
  } from 'firebase/firestore'

  require('dotenv').config();
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  // init firebase
// const { initializeApp } = require('firebase/app');
// const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore()
const chatCol = collection(db, 'chats')

let initialRoom = 'vue';
const chatq = query(chatCol, where('room', "==", initialRoom), orderBy('created_at'))


    // <----- Chats ------>

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
            // if(this.unsub){
            //     this.unsub();
            // }
            this.getChats(() => {});
        }
    }
    


    /*========= CHAT UI =============*/

    // This goes into script UI
    
    class ChatUI {
      constructor(list){
        this.list = list;
      }
      clear(){
        this.list.innerHTML = '';
      }
      render(data){
        const when = data.created_at ?.toDate()
        ? dateFns.distanceInWordsToNow(data.created_at.toDate(),
        { addSuffix: true })
        : ''
      ;

        const html = `
          <li class="list-group-item">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${when}</div>
          </li>
        `;
        this.list.innerHTML += html;
        console.log(html)
      }

    }
  
  

    /*Goes into script App*/ 

    const chatList = document.querySelector('.chat-list');
    const newChatForm = document.querySelector('.new-chat');
    const newNameForm = document.querySelector('.new-name');
    const updateMssg = document.querySelector('.update-mssg');
    const rooms = document.querySelector('.chat-rooms');

    // Initialize the initial room (e.g., 'gaming')
    const username = localStorage.username ? localStorage.username : 'Unknown author';

    const chatUI = new ChatUI(chatList);
    const chatroom = new Chatroom(initialRoom, username);

    // add a new chat
    newChatForm.addEventListener('submit', e => {
      e.preventDefault();
      const message = newChatForm.message.value.trim();
      chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
    });

    // update the username
    newNameForm.addEventListener('submit', e => {
      e.preventDefault();
      // update name via chatroom
      const newName = newNameForm.name.value.trim();
      chatroom.updateName(newName);
      // reset the form
      newNameForm.reset();
      // show then hide the update message
      updateMssg.innerText = `Your name was updated to ${newName}`;
      setTimeout(() => updateMssg.innerText = '', 3000);
    });

    // update the chat room
    rooms.addEventListener('click', e => {
      e.preventDefault(); // Prevent the default behavior of navigating to a new page
    
      if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
    
        if (chatroom.unsub) {
          chatroom.unsub();
        }
    
        const newRoom = e.target.getAttribute('id');
        chatroom.updateRoom(newRoom);
        chatroom.getChats(chat => chatUI.render(chat));
      }
    });
    chatroom.getChats(data => chatUI.render(data));
    /*Above Goes into script App*/ 
