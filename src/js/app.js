// Лень копировать из другого проекта поэтому без extends
class MagicianOrDeamon {
  constructor(attack, distance) {
    this.setAttack = attack;
    this.setStoned = false;
    this.distance = distance;
  }

  get attack() {
    let penalty = 1;
    for (let i = 1; i < this.distance; i += 1) {
      penalty -= 0.1;
    }
    if (this.stoned) {
      return this.setAttack * penalty - Math.log2(this.distance) * 5;
    }
    return this.setAttack * penalty;
  }

  set attack(value) {
    this.setAttack = value;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(value) {
    this.setStoned = value;
  }
}

export default MagicianOrDeamon;
