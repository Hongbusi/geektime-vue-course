const { effect, reactive } = require('@vue/reactivity');

let sum;
const counter = reactive({ num1: 1, num2: 2 });
effect(() => {
  sum = counter.num1 + counter.num2;
  console.log(sum);
});

setInterval(() => {
  counter.num1++;
}, 1000);
