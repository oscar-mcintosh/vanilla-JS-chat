

// class Chatroom {
//     constructor(room, username){
//         this.room = room;
//         this.username = username;
//         this.chats = collection(db, 'chats');
//         this.unsub;
//     }
//     async addChat(message){
//         addDoc(chatCol, {
//             message,
//             username: this.username,
//             room: this.room,
//             created_at: serverTimestamp()
//         })
//     }
//     getChats(callback){
//      const unsub =  this.chats
//         where('room', '==', this.room)
//         orderBy('created_at')
//          onSnapshot(chatq, snapshot => {

//              snapshot.docChanges().forEach(change => {
//                  if(change.type === 'added'){
//                     callback(change.doc.data());
//                  }
//              });
//          });
//     }
//     updateName(username){
//         this.username = username;
//     }
//     updateRoom(room){
//         this.room = room;
//         console.log('room updated');
//         if(this.unsub){
//             this.unsub();
//         }
//     }
// }
