function debounce(fn, waitTime) {
  let timeout;

  return function() {
    clearTimeout(timeout);
    const args = arguments;
    timeout = setTimeout(() => {
      fn.apply(this, [...args]);
    }, waitTime);
  };
}
