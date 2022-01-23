import { AppError } from "../../../../errors/AppErrors";
import { Product } from "../../model/Product";
import { ICreateProductDTO, IProductsRepository } from "../IProductsRepository";


class ProductsRepository implements IProductsRepository {
  private products: Product[];

  private static INSTANCE: ProductsRepository;

  private constructor() {
    this.products = [];
  }

  public static getInstance(): ProductsRepository {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }

    return ProductsRepository.INSTANCE;
  }

  create({ id, item, preco }: ICreateProductDTO): Product {
    const product = new Product({ id, item, preco });

    this.products.push(product);

    return product;
  }

  findById(id: string): Product {
    const product = this.products.find(product => product.id === Number(id));

    if (!product) throw new AppError("Product not found", 404);

    return product;
  }

  listAll(): Product[] {
    return this.products;
  }

  updateProduct(id: string, price: number): Product {
    const product = this.products.findIndex(product => product.id === Number(id));

    if (product === -1) throw new AppError("Product not found", 404);

    this.products[product].preco = price;

    return this.products[product]
  }

  deleteProduct(id: string): void {
    const product = this.products.findIndex(product => product.id === Number(id));

    if (!product) throw new AppError("Product not found", 404);

    this.products.splice(product, 1);
  }
}

export { ProductsRepository }
