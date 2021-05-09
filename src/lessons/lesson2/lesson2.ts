console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Scope
// Function // iife
// Class
// conditions
// loops
// block code
// tray - catch
// switch

// let globalScope = {
//     outerScope: null,
//     f: 'function',
//     a: 10,
//     //b: 'function',
// }
//
// let a = 10;
//
// function f() {
//     let innerScope = {
//         outerScope: globalScope,
//         l: 'function',
//         a: 100,
//         h: 50,
//     }
//     let a = 100;
//     console.log(a);
//     let h = 50;
//     // b();
//     function l() {
//         let innerScopel = {
//             outerScope: innerScope,
//         }
//         console.log(h);
//         console.log(a);
//     }
//     l();
// }
//
// f();

// function b() {
//     let innerScope = {
//         outerScope: globalScope,
//         c: 50,
//     }
//     let c = 50;
//     console.log(h);
// }

let globalScope = {
    outerScope: null,
    sum: 'function',
}

// function sum(a: number) {
//     let sumScope = {
//         outerScope: globalScope,
//         a: undefined,
//     }
//     return function (b: number) {
//         let anonimScope = {
//             outerScope: sumScope,
//             b: undefined,
//         }
//     }
// }

// function sum(a: number) {
//     let sumScope = {
//         outerScope: globalScope,
//         a: 15,
//     }
//     return function (b: number) {
//         let anonimScope = {
//             outerScope: sumScope,
//             b: 5,
//         }
//         a += 5;
//         console.log(a + b);
//     }
// }
//
// let resultFunc = sum(10);
//
// resultFunc(10)
// resultFunc(5)
// resultFunc(25)

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(a: number) {
//     return function (b: number) {
//         return a + b;
//     }
// }

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return ++count;
//     }
// }
//
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter());


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

//function superSum(n: number) {
let superSum = (n: number) => {
    if (n <= 0) return 0;
    //if (n === 1) return (num:number) => num;
    if (n === 1) return function(num: number) {
        return num;
    }

    let _args: number[] = [];

    //function helper(...args: number[]) {
    const helper = (...args: number[]) => {
        _args = [..._args, ...args];
        if (_args.length >= n) {
            _args.length = n;
            return _args.reduce( (acc, number) => acc + number);
        }
        return helper;
    }
    return helper;
}

//const test = () => {
// function test() {
//     //@ts-ignore
//     console.log(arguments[0]);
// }
//@ts-ignore
//test(5, 10, 15);


// @ts-ignore
//console.log(superSum(3)(2)(5)(3));
// // @ts-ignore
// console.log(superSum(3)(2,5,3));
// // @ts-ignore
// console.log(superSum(3)(2,5)(3,9));


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumToByLoop(n:number) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }
//console.log(sumToByLoop(100));

// function sumTo(n:number):number {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }
// console.log(sumTo(3));
//
// function sumTo(n:number, acc: number):number {
//     if (n === 1) return n + acc;
//     return sumTo(n - 1, acc + n);
// }
//
// console.log(sumTo(3, 0));



// just a plug
export default Lesson2;