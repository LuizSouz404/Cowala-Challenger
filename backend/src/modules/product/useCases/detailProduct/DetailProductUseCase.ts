import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  product_id: string;
}

class DetailProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  execute({ product_id }: IRequest) {
    return this.productsRepository.findById(product_id);
  }
}

export { DetailProductUseCase }
