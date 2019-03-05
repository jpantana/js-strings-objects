// printToDom function
const printToDom = (divId, textToPrint) => {
    const numDiv = document.getElementById(divId);
    numDiv.innerHTML += textToPrint;
};

// condtion test
const iAmThirsty = (num) => {
  if (num < 21) {
      return 'Maybe just drink water <br />';
  } else if (num >= 21 && num <+65) {
      return 'Have a beer! <br />';
  } else {
      return 'take a nap <br />';
  }
};

const arrayAge = [55, 21, 11, 44];
for (var i = 0; i < arrayAge.length; i++) {
  printToDom('stillThirsty', iAmThirsty(arrayAge[i]));
};




// console.log(iAmThirsty(55));
// console.log(iAmThirsty(11));
// console.log(iAmThirsty(100));


// prompt const to verify age
const numDiv = document.getElementById('beerDrink');
numDiv.innerHTML = iAmThirsty(prompt('Thirsty? Well, how old are ya?'));

// function call
printToDom('thirsty', iAmThirsty(55));
printToDom('thirsty', iAmThirsty(20));
printToDom('thirsty', iAmThirsty(67));



// console.log(1 === '1'); //false
// console.log(1 == '1'); //true
// console.log(1 !== '2'); //true


// console.log('cats'.length); 

// const quote = 'winter is coming';
// console.log(quote.indexOf('is')); 









// const arrayAge = [55, 21, 11, 44];

// for (var i = 0; i < arrayAge.length; i++) {
//     if (arrayAge[i] < 21) {
//         return 'Maybe just drink water';
//     } else if (arrayAge[i] >= 21 && arrayAge[i] <= 65) {
//         return 'Have a beer!';
//     } else {
//         return 'take a nap'
//     }

    

// };
// printToDom('thirsty', arrayAge[i]);