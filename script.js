function greeting(){
    var userName = prompt('Enter your name:');
var userAge = prompt('Enter your age:')

if(userAge >= 18){
    document.getElementById('greeting-text').innerHTML = `"Welcome" ${userName}! you are eligible`;
}else{
    document.getElementById('greeting-text').innerHTML = `"Sorry" ${userName}! you are too young to join`;
}
}
