import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;
