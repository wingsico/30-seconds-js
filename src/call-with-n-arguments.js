const callWithNArguments = (fn, n) => (...args) => fn(...args.slice(0, n));

const test = () => [[1, 2, 'c'], [1, 8, 9], [8, 4], [10]].map(ary => callWithNArguments(Math.max, 2)(...ary))

console.log(test())
