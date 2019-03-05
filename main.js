// printToDom function
const printToDom = (divId, textToPrint) => {
    const numDiv = document.getElementById(divId);
    numDiv.innerHTML += textToPrint;
};

// condtion test
const iAmThirsty = (num) => {
  if (num < 21) {
      return 'Maybe just drink water';
  } else if (num >= 21 && num <+65) {
      return 'Have a beer!';
  } else {
      return 'take a nap'
  }
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


const arrayAge = [55, 21, 11, 44];

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