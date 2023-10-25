const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
const initialRoom = 'vue';


// Initialize the initial room (e.g., 'vue')
const username = localStorage.username ? localStorage.username : 'Unknown author';

// const chatUI = new ChatUI(chatList);
// const chatroom = new Chatroom(initialRoom, username);

console.log('hello from variable script')

export { chatList, 
        newChatForm, 
        newNameForm, 
        updateMssg, 
        rooms, 
        initialRoom,
        username, 
        // chatUI,
        // chatroom
    }