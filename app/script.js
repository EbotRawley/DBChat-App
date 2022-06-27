function search(){
    var input = document.getElementById("search_chat");
    filter = input.value.toUpperCase();
    var chats = document.getElementById("chats")
    var chat = chats.getElementsByClassName("chat")
    console.log(chat.length)
    for(var i=0; i<chat.length; i++){
        var name = chat[i].getElementsByTagName("h4")[0];
        var textValue = name.textContent || name.innerText;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            chat[i].style.display = ""
        }
        else{
            chat[i].style.display = "none"
        }
    }
}

function send_msg(){
    const text = document.getElementById("msg")
    const inbox = document.getElementById("chat_cont")
    if(text.value != "" && !text.value.match(/^[ \s]/)){
        const newMsg = document.createElement('div')
        newMsg.classList.add('box', 'me')
        const text_cont = document.createElement('div')
        text_cont.classList.add('text')
        text_cont.textContent = text.value;
        newMsg.appendChild(text_cont);
        inbox.appendChild(newMsg);
        newMsg.scrollIntoView();
        text.style.background = "red";
        const inp = document.querySelector(".emojionearea-editor");
        inp.textContent = ""
    }
}
let initialTheme = true
function toggleTheme(){
    const logo = document.getElementById('logo-img')
    const root = document.documentElement;
    if(initialTheme){
        logo.src = '/images/dark-logo.png'
        root.style.setProperty('--body-bgColor', '#111') // body background
        root.style.setProperty('--bg-color1', '#333') // actions bg + inbox bg
        root.style.setProperty('--text-color1', '#fff') // links + sender messages
        root.style.setProperty('--bg-color3', '#222') // inbox menu
        root.style.setProperty('--text-color3', '#000')
        root.style.setProperty('--text-color2', '#888')
        root.style.setProperty('--bg-color4', '#444') // chat actions hover
        root.style.setProperty('--text-color5', '#fff') // body text color
        root.style.setProperty('--bg-color6', '#222') // search bg + chats bg
        root.style.setProperty('--bg-color7', '#111')
        root.style.setProperty('--text-color6', '#eee')
        initialTheme = false
    }
    else{
        logo.src = '/images/light-logo.png'
        root.style.setProperty('--body-bgColor', '#e0ebe9')
        root.style.setProperty('--bg-color1', '#fff')
        root.style.setProperty('--text-color1', '#222')
        root.style.setProperty('--bg-color3', '#eee')
        root.style.setProperty('--text-color3', '#fff')
        root.style.setProperty('--text-color2', '#777')
        root.style.setProperty('--bg-color4', '#ddd')
        root.style.setProperty('--text-color5', '#000')
        root.style.setProperty('--bg-color6', '#fff')
        root.style.setProperty('--bg-color7', '#eee')
        root.style.setProperty('--text-color6', '#555')
        initialTheme = true
    }
}