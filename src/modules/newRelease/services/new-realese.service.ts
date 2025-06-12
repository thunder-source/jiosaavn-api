import { GetNewRealeseUseCase } from '../use-cases'
import type { GetNewRealeseArgs } from '#modules/newRelease/use-cases'

export class NewReleasesService {
  private readonly getNewRealeseUseCase: GetNewRealeseUseCase

  constructor() {
    this.getNewRealeseUseCase = new GetNewRealeseUseCase()
  }

  getNewRealese = ({ language, page, limit }: GetNewRealeseArgs) => {
    return this.getNewRealeseUseCase.execute({ language, page, limit })
  }
}
