import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
      console.log("Hi")
    }

    show() {
      alert("Hi")
    }
  }
  