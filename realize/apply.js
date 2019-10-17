Function.prototype.apply = (context = window, ...args) => {
  context.fn = this;
  let res;

  if (args.length) {
    res = context.fn(args);
  } else {
    res = context.fn();
  }

  delete context.fn;
  return res;
};
