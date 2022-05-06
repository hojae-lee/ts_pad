// function
function Add (num1: number, num2: number): number {
  return num1 + num2;
}

Add (2, 1);

// 인자
function Hello (name: string | undefined, age: number): string {
  const age_con = age > 19 ? 'adult' : 'minor';
  return `Hello, ${age_con} !! ${name || 'Kim'}`;
}

const hello = Hello('Lee', 21);
const basic = Hello(undefined, 15);

console.log(hello, basic);

// 여러개 더하기
function seqAdd (...nums: number[]): number {
  return nums.reduce((result, num) => result + num, 0);
}

console.log(seqAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// interface 를 이용한 this 처리
interface UserName {
  name: string;
}

const Sam: UserName = {
  name: 'Sam'
};

function showName (this:UserName) {
  console.log(this.name);
}

const lee = showName.bind(Sam);
lee();

// 매개변수에 따라 다른 함수로 동작시키기

interface UserOption {
  name: string;
  age: number;
}

// 각 타입에 대해 정의
function join (name: string, age: string): string;
function join (name: string, age: number): UserOption;

function join (name: string, age: number | string): UserOption | string {
  if (typeof age === 'number') {
    return {
      name,
      age
    };
  } else {
    return "나이는 숫자로 입력하세요.";
  }
}

const bam:UserOption = join("Bam", 30);
const jam:string = join("Jam", "40");

console.log(bam, jam);