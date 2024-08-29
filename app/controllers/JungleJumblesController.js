import { AppState } from "../AppState.js";
import { jungleJumblesService } from "../services/JungleJumblesService.js";
import { setHTML } from "../utils/Writer.js";

export class JungleJumblesController {
  constructor() {
    console.log('JungleJumblesController has loaded');
    this.drawJungleJumbles()
  }

  drawJungleJumbles() {
    const jungleJumbles = AppState.jumbles

    let jungleJumblesHTML = ''

    jungleJumbles.forEach(jungleJumble => jungleJumblesHTML += jungleJumble.ListTemplate)

    const jungleJumbleElm = document.getElementById('junglejumbleslist')
    jungleJumbleElm.innerHTML = jungleJumblesHTML

  }


  setActiveJumble(jumbleId) {
    console.log('JungleJumblesController passed the active ID: ', jumbleId)
    jungleJumblesService.setActiveJumble(jumbleId)

  }

}