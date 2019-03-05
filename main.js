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

const catName = () => {
    return 'killer';
};

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep',
    }
};
// dot notation
console.log(bucketOCats.cat2);
console.log(bucketOCats.cat4.water);
// bracket notation
console.log(bucketOCats['cat2']);


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};


console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life); //42
console.log(hitchhikers_guide['random_facts']['ultimate_answer']['meaning_of_life']); //42


let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    vacation_days: 20,
  }

  let eom = "employee_of_the_month";
  employee[eom] = 'false';

  const answers = [aA, bB, cC, dD]

  var aA = (`Our company's lawyer is ${employee.name}</br>`); 
  var bB = (`Jeff was hired on ${employee['hire_date']}</br>`);  
  var cC = (employee.name + ' has ' + employee.vacation_days + ' remaining.</br>');
  var dD = (employee['employee_of_the_month']);




  console.log(`Our company's lawyer is ${employee.name}`); 
  console.log(`Jeff was hired on ${employee['hire_date']}`);  
  console.log(employee.name + ' has ' + employee.vacation_days + ' remaining.');
  console.log(employee);



  printToDom('answers', aA);
  printToDom('answers', bB);
  printToDom('answers', cC);
  printToDom('answers', dD);