interface ProductType {
  id: number;
  item: string;
  preco: number;
}

class Product {
  id: number;
  item: string;
  preco: number;

  constructor({ id, item, preco }: ProductType) {
    this.id = id;
    this.item = item;
    this.preco = preco
  }
}

export { Product }
