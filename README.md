# ts_pad

- 타입스크립트 끄적끄적 거리는 연습장.

## Typescript

- 타입스크립트는 컴파일시 타입을 결정하고 오류를 확인함. 정적타입 언어 (자바, C ... 등), TMI 로 자바스크립트는 동적타입 언어...

### ts 를 사용하는 이유

1. 자바스크립트에서는 타입을 선언하지 않기 때문에 원하지 않은 형변환 문제가 발생한다거나 컴파일 과정이 없기 때문에 런타임시 에러를 뱉어버리는 현상이 발생하는데 타입스크립트의 경우 미리 타입을 선언하기 때문에 형변환 문제를 예방할 수 있고 코드가 좀 더 직관적이고 명확하게 변경됩니다.
2. 타입스크립트는 컴파일 과정 es6 이상의 언어를 es5 로 바꿔주기 때문에 babel 을 따로 설정할 필요가 없이 크로스브라우징 문제를 해결할 수 있습니다.
3. 자바스크립트 기능에 대해 완벽하게 호환됩니다.

### ts vs js

1. js 에 비해 코드 작성시 매번 타입을 결정해야 함으로 개발 시간, 코드 용량이 커질 수 있음. 하지만, 타입에 관련된 예상치 못한 버그를 미연에 잡을 수 있습니다.
2. 자바스크립트는 런타임에 타입을 결정, 타입스크립트는 컴파일시 타입을 결정함.
3. 타입을 명시하기 때문에 유지보수, 가독성 측면에서 js 보다 유리함. 그렇기 때문에 작은 프로젝트에서는 js 가 좋지만, 큰 프로젝트에서는 ts가 더 좋음.

### 설치 방법

```bash
yarn global add typescript // 전역 설치
yarn add typescript --dev // 로컬 설치
```

### eslint

타입스크립트에 eslint 를 설치합니다.

```bash
yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

eslint 검사

```bash
yarn lint // yarn eslint . --ext .js,.jsx,.ts,.tsx
```

### tsconfig.json

**타입스크립트 세부설정 파일**

크로스 브라우징 문제로 es5 로 트랜스파일링 되어야 하니, 기본적으로 target 은 es5, module 은 common.js 로 사용하는 것이 국룰이다.

```json
"compilerOptions": {
  // 컴파일되는 코드가 어떤 환경에서 실행되는지 정의. (국룰)
  "target": "es5",
  // 어떤 모듈을 이용할 것인지 (국룰)
  "module": "commonjs",
  // 모든 타입 체킹 욥션을 활성화
  "strict": true,
  // 타입스크립트에서 자바스크립트로 트랜스파일링 되는 경로
  "outDir": "./dist"
},
"include": ["prac/*"],
"exclude": ["node_modules"]
```
