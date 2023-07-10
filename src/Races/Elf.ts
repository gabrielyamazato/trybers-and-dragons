import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._elfRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._elfRacesInstances;
  }
}

export default Elf;