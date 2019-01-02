interface IMyPromise {
  status: 'pendding' | 'resloved' | 'rejected'
  data: any
  onResolvedCallback: Array<Function>
  onRejectedCallback: Array<Function>


  then: (onFulfill?: Function, onReject?: Function) => void
  catch: (reason: any) => void
}


class MyPromise implements IMyPromise {
  private status
  private data
  private onResolvedCallback
  private onRejectedCallback

  constructor(executor: Function) {
    this.status = 'pendding'

    this.onResolvedCallback = []
    this.onRejectedCallback = []

    const resolve = (value) => {
      if (this.status === 'pendding') {
        this.status = 'resloved'
        this.data = value
        this.onResolvedCallback.forEach((fn) => fn(value))
      }
    }

    const reject = (reason) => {
      if (this.status === 'pendding') {
        this.status = 'rejected'
        this.data = reason
        this.onRejectedCallback.forEach((fn) => fn(reason))
      }
    }

    try {
      executor(resolve,reject)
    } catch (e) {
      this.catch(e)
    }
  }

  public then(onFulfill, onReject) {
    if (this.status === 'resloved' && onFulfill) {
      this.onResolvedCallback.push()
      onFulfill(this.data)
    }

    if (this.status === 'rejected' && onReject) {
      onReject(this.data)
    }

    return
  }

  public catch(reason) {
    return
  }

  public all(){}
  public race(){}

}

const p = new Promise()
