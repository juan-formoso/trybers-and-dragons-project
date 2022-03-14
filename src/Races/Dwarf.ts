import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;
