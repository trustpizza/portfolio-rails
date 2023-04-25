import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card", "button"]
  static values = { index: Number, default: 0 }

  static classes = ["hidden"]
  
  initialize() {
    this.index = this.indexValue
    this.showCurrentSlide()
  }

  handleClick(event) {
    this.index = parseInt(event.target.dataset.index)
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.cardTargets.forEach((card, i) => {
      card.classList.toggle("hidden", i == this.index)
      console.log(card)
    })

    // this.buttonTargets.forEach((button, i) => {
    //   button.classList.toggle("active", i == this.index)
    // })
  }
}


