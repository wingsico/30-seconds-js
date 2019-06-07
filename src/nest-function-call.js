const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);

function test() {
  const mul2 = n => n * 2;
  const add8 = n => n + 8;
  console.log(compose(
    mul2,
    add8
  )(9))
}

test();
