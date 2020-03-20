export class Util {
  static nomeConcat(item: any[]) {
    return item.map(x => x.nome).join(',');
  }
}
