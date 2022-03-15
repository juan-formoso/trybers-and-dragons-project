import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  _energyType: EnergyType;
  static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypesInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypesInstances(): number {
    return Ranger._createdArchetypesInstances;
  }
}

export default Ranger;
