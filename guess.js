    var num = Math.ceil(Math.random() * 10);
    var guess;
  
    while (guess != num) {
      guess = prompt('Guess the number between 1 and 10');
    }
    
    console.log('Congratulations! The number was ' + num);