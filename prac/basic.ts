// string
// const car: string = 'bmw';
const car = 'bmw';
// number
// const age: number = 30;
const age = 30;
// boolean
// const isAdult: boolean = true;
const isAdult = true;
// number[]
const a:number[] = [1,2,3];
const a2:Array<number> = [1,2,3];
// string[]
const week1:string[] = ['mon', 'tue', 'wed'];
const week2:Array<string> = ['mon', 'tue', 'wed'];

// Tuple
let b:[string, number] = ['z', 0];
// 가능
b = ['z', 1];
// 불가능
// b = [1, 'z'];

console.log(car, age, isAdult, a, a2, week1, week2, b);

// void, never
function sayHello(): void {
  console.log('hello');
}

function showError(): never {
  throw new Error();
}

function inLoop(): never {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    throw new Error();
    // 무언가...
  }
}

sayHello();

// enum (열거형)
// 자등으로 키값이 인덱스로 열거됨. 양방향 맵핑이 되어있기 때문에, 스트링으로 입력시에는 키값으로 들어감.
enum Os {
  Window = 3,
  Ios,
  Android
}

const myOs:Os = Os.Window;

// null, undefined
const anull = null;
const bundefined = undefined;

console.log(myOs, anull, bundefined);

showError();
inLoop();