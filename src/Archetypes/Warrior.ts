import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  _energyType: EnergyType;
  static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdArchetypesInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypesInstances(): number {
    return Warrior._createdArchetypesInstances;
  }
}

export default Warrior;
