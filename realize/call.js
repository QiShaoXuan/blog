Function.prototype.call = function (context) {
  var context = context || window
  context.fn = this

  var args = []
  for(var i = 1, len = arguments.length ;i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args +')')

  delete context.fn
  return result
}
