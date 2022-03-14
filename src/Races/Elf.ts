import Race from './Race';

abstract class Elf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

export default Elf;
