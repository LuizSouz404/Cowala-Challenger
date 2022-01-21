import { v4 as uuidv4 } from 'uuid';

class Product {
  id?: string;
  item: string;
  preco: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product }
