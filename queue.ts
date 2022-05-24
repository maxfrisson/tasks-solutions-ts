class LinkedList {
  #length = 0;
  #head: any;
  #tail: any;

  addToTail(value: number | string) {
    const node = {
      value: value,
      next: null,
    };

    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail = node;
    }

    this.#length++;
  }

  removeFromHead() {
    if (this.#length === 0) {
      return;
    }

    const value = this.#head?.value;
    this.#head = this.#head?.next;
    this.#length--;
    return value;
  }

  size(): any {
    return this.#length;
  }
}

class Queue extends LinkedList {
  enqueue: (value: any) => void;
  dequeue: () => any;
  constructor() {
    super();

    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }

  get size2() {
    return super.size();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(22);
queue.enqueue(35);
queue.enqueue(42);
queue.enqueue(51);
queue.enqueue(67);
queue.enqueue(86);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.size2);
