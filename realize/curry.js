function curry(fn, ...args) {
  const length = fn.length;

  return function() {
    let newArgs = args.concat(...arguments);
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}
