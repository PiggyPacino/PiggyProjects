let myImage = document.querySelector('img');
myImage.onclick = function(){
    if(myImage.getAttribute('src')==='./images/fire-fox.png'){
    myImage.setAttribute('src','./images/firefox-logo-nightly.png');
}else{
    myImage.setAttribute('src','./images/fire-fox.png')
}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setName(){
    let name = prompt('请输入你的名字：');
    if(!name || name === null){
        setName();
    }
    localStorage.setItem('name',name);
    myHeading.textContent = 'Hello '+name+'!';
}
if(!localStorage.getItem('name')){
    setName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello '+storedName+'!';
}
myButton.onclick = function(){
    setName();
}