interface MyPromise {
  status: 'pendding' | 'resloved' | 'rejected'
  data: any
  onResolvedCallback: Array<Function>
  onRejectedCallback: Array<Function>


  then: (onFulfill?: any, onReject?: any) => void
  catch: (reason: any) => void
}


class Promise implements MyPromise {
  private status
  private data
  private onResolvedCallback
  private onRejectedCallback

  constructor(executor?: Function) {
    this.status = 'pendding'

    this.onResolvedCallback = []
    this.onRejectedCallback = []

    const resolve = (value) => {
      if (value instanceof Promise) {
        return value.then(resolve, reject)
      }

      setTimeout(() => {
        if (this.status === 'pendding') {
          this.status = 'resloved'
          this.data = value
          this.onResolvedCallback.forEach((fn) => fn(value))
        }
      })
    }

    const reject = (reason) => {
      setTimeout(() => {
        if (this.status === 'pendding') {
          this.status = 'rejected'
          this.data = reason
          this.onRejectedCallback.forEach((fn) => fn(reason))
        }
      })
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      this.catch(e)
    }
  }

  public then(onFulfill, onReject) {
    const self = this
    let promise2
    onFulfill = typeof onFulfill === 'function' ? onFulfill : (v) => v
    onReject = typeof onReject === 'function' ? onReject : (v) => {
      throw v
    }

    if (self.status === 'resolved') {
      return promise2 = new Promise(function(resolve, reject) {
        try {
          var x = onFulfill(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
          resolve(x)
        } catch (e) {
          reject(e)
        }
      })
    }

    if (self.status === 'rejected') {
      return promise2 = new Promise(function(resolve, reject) {
        try {
          var x = onReject(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    }

    if (self.status === 'pendding') {
      promise2 = new Promise((resolve, reject) => {
        self.onResolvedCallback.push((value) => {
          try {
            let x = onFulfill(value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })

        self.onRejectedCallback.push((value) => {
          try {
            let x = onReject(value)
            resolvePromise(promise2, x, resolve, reject)
          }catch (e) {
            reject(e)
          }
        })
      })
    }

    return promise2
  }

  public catch(reason) {
    return
  }

  public all() {
  }

  public race() {
  }
}

function resolvePromise(promise2: Function, x: Function, resolve: Function, reject: Function):void {
  var then
  var thenCalledOrThrow = false

  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if (x instanceof Promise) {
    if (x.status === 'pendding') {
      x.then(function(v) {
        resolvePromise(promise2, v, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
    return
  }

  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    resolve(x)
  }
}

