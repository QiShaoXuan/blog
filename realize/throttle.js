function throttle(fn, timehold) {
  let startTime = new Date().getTime();
  const context = this;

  return function() {
    const currentTime = new Date().getTime();
    if (currentTime - startTime >= timehold) {
      fn.apply(context, [...arguments]);

      startTime = currentTime;
    }
  };
}
