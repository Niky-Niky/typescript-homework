// First task

let age: number = 50;
let usrName: string = 'Max';
let toggle: boolean = true;
let empty: null | undefined = null;
let notInitialized: true | false | undefined = undefined;
let callback = (a: number) => {return 100 + a};

// Second task

let anything: unknown = -20;
anything = 'Text';
anything = {};

// Third task

let  some: unknown;
some = 'Text'

let str: unknown;
str = some

// Fifth task 

let person: [string, number] = ['Max', 21]

// Sixth task

enum loadingState {
    Loading = 'LOADING',
    Loaded = 'READY',
}

// Seventh task

let string0rNumber: string | number = 4

// Eighth task 

let Status: "enable" | "disable" = "enable"

// Nineth task

    function showMessage(message: unknown) {
    console.log(message);
}
   
    function calc(num1: number, num2: number) {
    return num1 + num2;
}
   
    function customError() {
    throw new Error('Error');
}

// Tenth task

interface FirstPage {
    title: string,
    likes: number,
    accounts: string[],
    status: "open" | "closed",
    details: {
        createAt: Date,
        updateAt: Date,
    } 
}

const page1: FirstPage = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
   }
   
interface SecondPage {
    title: string,
    likes: number,
    accounts: string[]
    status: 'open' | 'closed'
}

   const page2: SecondPage = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'closed',
   }