function myNew() {
  const obj = {};
  const constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const reslut = constructor.apply(obj, arguments);
  return reslut && reslut instanceof Object ? reslut : obj;
}
