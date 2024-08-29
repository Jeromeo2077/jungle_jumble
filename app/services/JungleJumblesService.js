import { AppState } from "../AppState.js"

class JungleJumblesService {


  setActiveJumble(jumbleId) {
    const jungleJumble = AppState.jumbles

    const foundJungleJumble = jungleJumble.find(jungleJumble => jumbleId == jungleJumble.id)
    console.log('JungleJumbleService selected the following active jumble: ', foundJungleJumble);

  }
}

export const jungleJumblesService = new JungleJumblesService()