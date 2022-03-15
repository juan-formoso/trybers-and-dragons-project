import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  _energyType: EnergyType;
  static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypesInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypesInstances;
  }
}

export default Mage;
