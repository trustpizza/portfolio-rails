import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card", "button", "bubble"]
  static values = { index: Number, default: 0 }

  static classes = ["hidden"]
  
  initialize() {
    this.index = this.indexValue
    this.showCurrentSlide(this.index)
  }

  handleClick(event) {
    this.index = parseInt(event.target.dataset.index)
    this.showCurrentSlide(this.index)
  }

  next() {
    if ((this.index + 1) > (this.cardTargets.length - 1)) {
      this.index = 0
    } else {
      this.index++
    }

    this.showCurrentSlide()
  }

  previous() {
    if ((this.index -1 ) < 0) {
      this.index = this.cardTargets.length - 1
    } else {
      this.index--
    }

    this.showCurrentSlide()
  }

  showCurrentSlide(index) {
    
    this.cardTargets.forEach((card, i) => {
      card.classList.toggle("hidden", i !== this.index)
    })

    this.buttonTargets.forEach((button, i) => {
      // button.toggleAttribute("active")
      button.classList.toggle("active", i !== this.index)
    })

    this.bubbleTargets.forEach((bubble, i) => {
      bubble.classList.toggle("bg-blue-200", i == this.index)
    })
  }
}


