    import {
        getFirestore, collection, onSnapshot,
        addDoc, query, where,
        orderBy, serverTimestamp,
    } from 'firebase/firestore'
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
