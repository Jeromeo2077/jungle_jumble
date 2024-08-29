import { generateId } from "../utils/GenerateId.js"

export class JungleJumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.difficulty = data.difficulty
    this.body = data.body

    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() { // a basic list template to get drawing
    return `      
        <div onclick="app.JungleJumblesController.setActiveJumble('${this.id}')"  class="p-3 m-3 border border-1 border-dark shadow d-flex justify-content-around" role="button">
          <h3>${this.difficulty}</h3>
          <p>Time: 34.3s</p>
          <p>WPM: 55.3</p>
        </div>`
  }
}