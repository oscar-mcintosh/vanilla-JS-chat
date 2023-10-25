    /*Goes into script App*/ 
    import { chatList, newChatForm, newNameForm, updateMssg, rooms, initialRoom, username, } from './variables'

    import  Chatroom  from './chat';
    import  ChatUI  from './ui';


    // const chatList = document.querySelector('.chat-list');
    // const newChatForm = document.querySelector('.new-chat');
    // const newNameForm = document.querySelector('.new-name');
    // const updateMssg = document.querySelector('.update-mssg');
    // const rooms = document.querySelector('.chat-rooms');
    // let initialRoom = 'vue';

    // Initialize the initial room (e.g., 'vue')
    // const username = localStorage.username ? localStorage.username : 'Unknown author';

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
      e.preventDefault(); 
    
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


    // export {
    //     newChatForm, newNameForm, rooms
    // }