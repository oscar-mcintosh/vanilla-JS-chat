// import { initializeApp } from 'firebase/app'
import  ChatUI  from './ui';
import { chatList, username, } from './variables'
import  './app'
import '../styles.css'
// import  ChatUI  from './ui';


// import {
//     getFirestore, collection, onSnapshot,
//     addDoc, query, where,
//     orderBy, serverTimestamp,
// } from 'firebase/firestore'

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

// init services
// const db = getFirestore()
// const chatCol = collection(db, 'chats')

// let initialRoom = 'vue';
// const chatq = query(chatCol, where('room', "==", initialRoom), orderBy('created_at'))

    // <----- Chats ------>

    // class Chatroom {
    //     constructor(room, username){
    //         this.room = room;
    //         this.username = username;
    //         this.chats = collection(db, 'chats');
    //         this.unsub;
    //     }
    //     async addChat(message) {
    //       const now = new Date();
    //       try {
    //         const response = await addDoc(chatCol, {
    //           message,
    //           username: this.username,
    //           room: this.room,
    //           created_at: serverTimestamp(),
    //         });
    //         return response;
    //       } catch (error) {
    //         console.error('Error adding chat:', error);
    //       }
    //     }
    //     getChats(callback) {
    //       const newChatq = query(chatCol, where('room', '==', this.room), orderBy('created_at'));

    //       // Unsubscribe from the previous query, if any
    //       if (this.unsub) {
    //         this.unsub();
    //       }

    //       // this.unsub = onSnapshot(chatq, (snapshot) => {
    //         this.unsub = onSnapshot(newChatq, (snapshot) => {

    //         snapshot.docChanges().forEach((change) => {
  
    //           if (change.type === 'added') {
    //             // Update UI
    //             callback(change.doc.data());
    //           }
    //         });
    //       });
    //     }
        
        
    //     updateName(username){
    //         this.username = username;
    //         localStorage.username = username;
    //     }
    //     updateRoom(room){
    //         this.room = room;
    //         console.log('room updated');
    //         this.getChats(() => {});
    //     }
    // }   



    /*Goes into script App*/ 

    // const chatList = document.querySelector('.chat-list');
    // const newChatForm = document.querySelector('.new-chat');
    // const newNameForm = document.querySelector('.new-name');
    // const updateMssg = document.querySelector('.update-mssg');
    // const rooms = document.querySelector('.chat-rooms');

    // Initialize the initial room (e.g., 'vue')
    // const username = localStorage.username ? localStorage.username : 'Unknown author';

    // const chatUI = new ChatUI(chatList);
    // const chatroom = new Chatroom(initialRoom, username);

    const chatUI = new ChatUI(chatList);
    // const chatroom = new Chatroom(initialRoom, username);



    // add a new chat
    // newChatForm.addEventListener('submit', e => {
    //   e.preventDefault();
    //   const message = newChatForm.message.value.trim();
    //   chatroom.addChat(message)
    //     .then(() => newChatForm.reset())
    //     .catch(err => console.log(err));
    // });

    // update the username
    // newNameForm.addEventListener('submit', e => {
    //   e.preventDefault();
    //   const newName = newNameForm.name.value.trim();
    //   chatroom.updateName(newName);
    //   newNameForm.reset();
    //   updateMssg.innerText = `Your name was updated to ${newName}`;
    //   setTimeout(() => updateMssg.innerText = '', 3000);
    // });

    // update the chat room
    // rooms.addEventListener('click', e => {
    //   e.preventDefault(); 
    
    //   if (e.target.tagName === 'BUTTON') {
    //     chatUI.clear();
    
    //     if (chatroom.unsub) {
    //       chatroom.unsub();
    //     }
    
    //     const newRoom = e.target.getAttribute('id');
    //     chatroom.updateRoom(newRoom);
    //     chatroom.getChats(chat => chatUI.render(chat));
    //   }
    // });
    // chatroom.getChats(data => chatUI.render(data));
