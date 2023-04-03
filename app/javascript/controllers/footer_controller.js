import { Controller } from "@hotwired/stimulus"
import footer from "../footer/footer.js"

export default class extends Controller {
  connect() {
    console.log(footer)
    // this.element.textContent = "Hello World!"
  }
}