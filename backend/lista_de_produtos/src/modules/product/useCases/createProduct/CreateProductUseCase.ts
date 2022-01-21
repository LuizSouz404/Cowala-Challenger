import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  item: string;
  preco: number;
}

class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  execute({ item, preco }: IRequest) {
    return this.productsRepository.create({ item, preco });
  }
}

export { CreateProductUseCase }
