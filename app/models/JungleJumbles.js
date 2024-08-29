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
    <div id="junglejumbleslist" class="col-5 mt-1 mx-1">
        <div class="p-3 border border-1 border-dark">
          <h3>Easy Jumble</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non, porro suscipit aut temporibus vitae
            ipsam nam incidunt iste error ex recusandae, nulla ad laudantium ullam sunt neque id doloribus.</p>
        </div>`
  }
}