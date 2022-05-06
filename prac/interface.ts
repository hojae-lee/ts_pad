type Score = 'A' | 'B' | 'C' | 'D';

interface User {
  name: string;
  age: number;
  gender?: string; // 옵션을 입력해도 되고 안해도 되는 옵션 ?
  readonly birth: number; // 읽기 전용 속성으로 수정할 수 없음. 생성할 때만 할당가능하고 수정 불가능.
  [grade:number]: Score; // number 를 키로하고 string value 를 여러개 받을 수 있다는 뜻
}

const user: User = {
  name: 'kim',
  age: 30,
  birth: 2000,
  1: "A",
  2: "B"
};

user.age = 22;

console.log(user.name);

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
  return x + y;
}

add(10, 20);

interface IsAdult {
  (age: number): boolean;
}

const ag: IsAdult = age => {
  return age > 19;
}

ag(20);

// class
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c:string) {
    this.color = c;
  }
  start(): void {
    console.log("start!");
  }
}

const bmw = new Bmw('white');
console.log(bmw);
bmw.start();

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: 'white',
  wheels: 4,
  door: 4,
  start() {
    console.log('start!');
  },
  stop() {
    console.log('stop!');
  }
}

console.log(benz);

// 여러개 interface
interface Toy {
  name: string;
}

interface Robot {
  kinds: string;
  weight: number;
  height: number;
}

class ToyRobot implements Toy, Robot {
  name;
  kinds;
  weight;
  height;

  constructor (name: string, kinds: 'A' | 'B' | 'C', weight: number, height: number) {
    this.name = name;
    this.kinds = kinds;
    this.weight = weight;
    this.height = height;
  }
}

const toyrobot = new ToyRobot('ABC', 'A', 500, 180);
console.log(toyrobot);
