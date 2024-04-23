import { GetNewRealeseUseCase } from '../use-cases'



export class NewReleasesService {
  private readonly getNewRealeseUseCase: GetNewRealeseUseCase

  constructor() {
    this.getNewRealeseUseCase = new GetNewRealeseUseCase()
  }


  getAlbumByLink = (albumLink: string) => {
    return this.getNewRealeseUseCase.execute(albumLink)
  }
}
