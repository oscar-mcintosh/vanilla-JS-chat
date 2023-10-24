class ChatUI {
    constructor(list){
      this.list = list;
    }
    clear(){
      this.list.innerHTML = '';
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix:true }
          );
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

console.log('ui file')

export const test = () => {
    console.log('tes from ui')
}

// const addTitle = (text) => {
//   const title =  document.createElement('h1');
//   title.text
// }