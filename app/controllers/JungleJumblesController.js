import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class JungleJumblesController {
  constructor() {
    console.log('JungleJumblesController has loaded');

  }

  drawJungleJumbles() {
    const jungleJumbles = AppState.jumbles

    let jungleJumblesHTML = ''

    jungleJumbles.forEach(jungleJumble => jungleJumblesHTML += jungleJumble.ListTemplate)

    setHTML('junglejumbleslist', jungleJumblesHTML)
  }
}