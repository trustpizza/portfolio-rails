import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card", "button"]
  static values = { index: Number, default: 0 }

  static classes = ["hidden"]
  
  initialize() {
    this.index = this.indexValue
    // this.showCurrentSlide()
  }

  handleClick(event) {
    this.index = parseInt(event.target.dataset.index)
    this.showCurrentSlide(this.index)
  }

  showCurrentSlide(index) {
    // console.log(index)
    this.cardTargets.forEach((card, i) => {
      card.classList.toggle("hidden", i !== index)
      console.log(i == index)
    })

    this.buttonTargets.forEach((button, i) => {
      // button.toggleAttribute("active")
      button.classList.toggle("active", i !== this.index)
    })
  }
}


