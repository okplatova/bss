import ym from 'react-yandex-metrika'
import { enableYM } from '../provider/YandexMetrika'

export const pointYandexGoal = (goal: string) => {
  if (!enableYM) {
    console.log(`%c[YandexMetrika](GOAL)`, `color: orange`, goal)
    return
  }

  ym('reachGoal', goal)
}
