Function.prototype.bind = context => {
  const self = this;
  const args = [].slice.call(arguments, 1);

  function resFn() {
    return self.apply(
      this instanceof resFn ? this : context,
      args.concat(...arguments)
    );
  }

  function middleFn() {}

  middleFn.prototype = self.prototype;
  resFn.prototype = new middleFn();

  return resFn();
};
