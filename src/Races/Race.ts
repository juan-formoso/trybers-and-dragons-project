/* A classe Race deve ter os atributos privados: name e dexterity, ambos inicializados em seu construtor;

O atributo name dever ser do tipo string;

O atributo dexterity dever ser do tipo number;
name e dexterity devem ser recebidos como parâmetro e inicializados no construtor;

Os atributos da classe Race podem ser lidos mas não podem ser alterados:
name deve retornar o tipo string;
dexterity deve retornar o tipo number;

A classe Race deve ter um método estático chamado createdRacesInstances que retorna um number;

Esse número é correspondente a quantidade de instâncias criadas a partir das classes estendidas da classe Race;

Cada raça vai ter seu número máximo de instâncias e isto será feito dentro de suas classes especializadas;

Na classe Race será lançada apenas a mensagem de erro: Not implemented;

A classe Race deve ter um getter abstrato chamado maxLifePoints que retorna um number;

Esse número corresponde à quantidade máxima de pontos de vida da raça.

Cada raça vai ter seu número máximo de pontos e isto será feito dentro de suas classes especializadas;

Na classe Race deve estar apenas a assinatura do método;
 */

abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }
  
  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
