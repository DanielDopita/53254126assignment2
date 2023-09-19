var password = prompt('create a password');

do{
var passwordCheck = prompt('enter your password again');
}while(passwordCheck !== password)

console.log('Your passwords match');