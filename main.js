const s = 'technology, computers, it';
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(', '));

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'bananas', 'oranges', 'greps', 10, true];
console.log(fruits[2]);
fruits[6] = 'strawberries';
fruits.push('mangos');
fruits.unshift('pears');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(Array.isArray("fruits"));
console.log(fruits.indexOf('bananas'));
console.log(fruits);





const person = {
    first_name: 'Michal',
    last_name: 'Knybel',
    age: 17,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Ostrava',
        state: 'Czechia'
    }
}
console.log(person.first_name, person.last_name);
console.log(person.hobbies[1]);
console.log(person.address.city);
const {firstName, lastName, address: {city}} = person;
console.log(city);
person.email = 'michal@gmail.com';



const todos = [
    {id: 1,
     text: 'Take out trash',
     isCompleted: true
    },
    {id: 2,
     text: 'Meeting with boss',
     isCompleted: true
    },
    {id: 3,
        text: 'Dentist appt',
        isCompleted: false
       }
]
console.log(todos[1].text);

const totoJSON = JSON.stringify(todos);
console.log(totoJSON);

for(let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.text);
}

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted===true;  
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);






const x = 4;
const y = 11;

if (x>5 || y < 10) {
    console.log('x is more than 5 or y is more than 10');
}


x=10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);


switch (color) {
    case 'red':
        console.log('red');
        break;
    case 'blue':
        console.log('blue');
        break;
    default:
        console.log('not red or blue');
        break;
}




const addNums = num1 => num1+5;
console.log(addNums(5));






class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1 = new Person('Michal', 'Knybel', '16-07-2004');
const person2 = new Person('Marry', 'Smith', '01-01-2000');

console.log(person2.getBirthYear());
console.log(person1.getFullName());









