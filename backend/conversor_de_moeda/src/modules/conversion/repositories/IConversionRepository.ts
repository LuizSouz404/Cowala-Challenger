import { Conversion } from '../model/Conversion';

interface IConversionDTO {
  id: number;
  moedaOriginal: string;
  moedaDaConversao: string;
  valorEnviado: number;
  valorConvertido: number;
}

interface IConversionsRepository {
  create(data: IConversionDTO): Conversion;
  listAllConversions(id: number): Conversion[];
  findById(): Conversion | undefined;
  deleteConversion(id: number): void;
}

export { IConversionsRepository, IConversionDTO }
