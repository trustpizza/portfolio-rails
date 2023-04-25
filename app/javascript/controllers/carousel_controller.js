import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]

  connect() {
    console.log("Hi")
  }

  show = () => {
    console.log('hi')
    
    console.log(this.cardTargets)
  }
}


