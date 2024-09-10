type Callback<T> = (data: T) => void

class PubSub<T> {
  data = null
  private subscribers: Callback<T>[] = []

  subscribe(callback: Callback<T>): void {
    this.subscribers.push(callback)
  }

  unsubscribe(callback: Callback<T>): void {
    this.subscribers = this.subscribers.filter((fn) => fn !== callback)
  }

  publish(data: T): void {
    this.data = data
    this.subscribers.forEach((fn) => fn(data))
  }
}

export const ps = new PubSub()
