Function.prototype.call = (context = window) => {
  context.fn = this
  const args = [...arguments].slice(1)
  const res = context.fn(args)
  delete context.fn
  return res
}
