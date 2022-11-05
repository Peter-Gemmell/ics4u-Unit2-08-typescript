/**
 * Vehicle Class
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-10-17
 */

class Vehicle {
  private color: string
  private readonly maxSpeed: number
  private readonly numberTires: number
  private speed = 0

  constructor(color: string, maxSpeed: number, numberTires: number) {
    this.color = color
    this.maxSpeed = maxSpeed
    this.numberTires = numberTires
  }

  // status
  status(): void {
    console.log(
      `    → Color: ${this.color}
    → Max Speed: ${this.maxSpeed}
    → Speed: ${this.speed}
    → Number of tires: ${this.numberTires}`
    )
  }

  // getter of color
  getColor(): string {
    return this.color
  }

  // setter of color
  setColor(newColor: string): void {
    this.color = newColor
  }

  // getter of speed
  getSpeed(): number {
    return this.speed
  }

  // setter of speed
  setSpeed(newSpeed: number): void {
    this.speed = newSpeed
  }

  // getter of Max Speed
  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // getter of tires
  getTires(): number {
    return this.numberTires
  }

  // method for acceleration
  accel(accelPower: number, accelTime: number): void {
    this.speed = accelPower * accelTime + this.speed

    // reality check
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // method for breaking
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    // reality check
    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

export = Vehicle
