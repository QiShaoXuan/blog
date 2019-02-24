Function.prototype.apply1 = function (context, arr) {
  var context = context || window
  context.fn = this

  var result

  if (!arr) {
    result = context.fn()
  }
  else {
    var args = []
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}
