import { Product } from "../model/Product";

interface ICreateProductDTO {
  id: number;
  item: string;
  preco: number;
}

interface IProductsRepository {
  create({ item, preco }: ICreateProductDTO): Product;
  findById(id: string): Product;
  listAll(): Product[];
  updateProduct(id: string, price: number): Product;
  deleteProduct(id: string): void;
}

export { IProductsRepository, ICreateProductDTO }
