import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card", "trigger"]
  static values = { index: Number, default: 0 }

  static classes = ["hidden"]
  
  initialize() {
    this.index = this.indexValue
    this.showCurrentSlide()
  }

  test(event) {
    this.index = event.target.getAttribute('data-carousel-index')
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.cardTargets.forEach((card, index) => {
      // card.hidden = index !== this.index
      console.log(card)
    })
  }
}


