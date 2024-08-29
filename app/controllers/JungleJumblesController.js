import { AppState } from "../AppState.js";
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

    // setHTML('junglejumbleslist', jungleJumblesHTML)
  }
}