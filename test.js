function aa(n) {
  if (n < 1) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 2
  }

  return aa(n - 1) + aa(n - 2)
}

console.log(aa(10))

