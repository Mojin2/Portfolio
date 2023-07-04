# TypeScript 이용한 Portfolio page

전반적인 react library 연습
<br><br>

## 🖥️ 프로젝트 소개

- Mypage app 제작을 통한 portfolio 완성

### ⏱️ 프로젝트 기간

- 2023.5.29~

### ⚙️ 프로젝트 환경

- **react** 18.2.0
- **react-hook-from** : 7.44.2
- **typescript** : 4.9.5
- **recoil** : 0.7.7
- **framer-motion** : 10.12.16
- **react-router-dom** : 6.11.2
- **styled-components** : 5.3.6
- **react-query** : 3.39.3
- **react-beautiful-dnd** : 13.1.1

### 🗓️ 프로젝트 진행

- 프로젝트 생성 with TypeScript ✅
- recoil 및 localstorage 적용 ✅
- DarkMode Toggle버튼을 통한 변화 ✅
- Navi menu에 Drag&Drop 애니메이션 적용 ✅

# Other tips

## ❗️ React 프로젝트 생성 with TypeScript

    npx create-react-app app --template typescript
    npm i styled-components
    npm i --save-dev @types/styled-components
    npm i recoil

## ❗️ TypeScript

- Type의 명시적 사용

```
let bool : boolean = false;
let num : number[] = [];
```

- Optional(question mark) & readonly

```
type Age = number;
type Player = {
    readeonly name:string,
    age?:Age
}
const player : Player = {
    name:"name"
};
```

- Return value type

```
const playerMaker = (name:string) : Player => ({name})
function playerMaker(name:string) : Player {
    return {
        name
    }
}
```

- Tuple

```
const player:[string,number,boolean] = ["name",12,false];
```

- Unknown

```
let a : unknown;
is (typeof a === "number"){ //타입을 확인하는 절차를 거침
    let b = a + 1;
}
```

- void & never

```
function a : void { //아무것도 return하지 않을때
    console.log("hello")
}
function b : never { // Error컨트롤이나 parameter타입이 2가지 이상일때
    throw new Error("xxxx")
}
function c(name:name|string){
    if (typeof name === "name"){
        name
    } else if (typeof name ==="string"){
        name
    } else {
        name // typeof name === "never"
    }
}
```

- call signature

```
type Add = (a:number,b:number) => number;
const add : Add = (a,b) => a + b
```

- overloading

```
type Add = {
    (a:number,b:number) : number
    (a:number,b:string) : number
}
const add : Add = (a,b) => {
    if (typeof b === "string") return a
    return a+b
}

type Add = {
    (a:number,b:number) : number
    (a:number,b:number,c:number) : number
}
const add : Add = (a,b,c?:number) => {
    if (c) return a+b+c
    return a+b
}
```

- polymorphism (generic)

```
type SuperPrint = {
    (arr:number[]) : void
    (arr:boolean[]) : void
}
const superPrint : SuperPrint = (arr) =>{
    arr.forEach(i=>console.log(i))
}
```
