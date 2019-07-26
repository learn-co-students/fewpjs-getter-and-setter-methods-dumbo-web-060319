// Add your Circle class here
class Circle {

  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius *2
  }

  set diameter(diameter) {
    this.radius = diameter / 2
  }
  
  get circumference(){
    let circ = (this.diameter * Math.PI)
    return circ
  }

  set circumference(circumference) {
    this.radius = circumference / 2 / Math.PI
  }

  get area(){
    let answer = (Math.PI * (this.radius * this.radius) )
    return answer
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI)
 }
}
