import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}

export default Orc;
