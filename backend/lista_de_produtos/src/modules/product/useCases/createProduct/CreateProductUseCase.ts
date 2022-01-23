import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  id: number;
  item: string;
  preco: number;
}

class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  execute({ id, item, preco }: IRequest) {
    return this.productsRepository.create({ id, item, preco });
  }
}

export { CreateProductUseCase }
