interface ConversionType {
  id: number;
  moedaOriginal: string;
  moedaDaConversao: string;
  valorEnviado: number;
  valorConvertido: number;
}

class Conversion {
  id: number;
  moedaOriginal: string;
  moedaDaConversao: string;
  valorEnviado: number;
  valorConvertido: number;

  constructor({ id, moedaDaConversao, moedaOriginal, valorConvertido, valorEnviado }: ConversionType) {
    this.id = id;
    this.moedaDaConversao = moedaDaConversao;
    this.moedaOriginal = moedaOriginal;
    this.valorConvertido = valorConvertido;
    this.valorEnviado = valorEnviado;
  }
}

export { Conversion }
