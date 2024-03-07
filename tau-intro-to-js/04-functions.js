function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20)); // 30

function product(a, b) {
  return a * b;
}

console.log(product(12, 12));

const bigProduct = product(2312312, 123123);
console.log(bigProduct);

setTimeout(function () {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  console.log("Hello again");
}, 2500);

setTimeout(() => console.log("Hello for the third time"), 3500);
