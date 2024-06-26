import {
  type GetArtistAlbumsArgs,
  GetArtistAlbumsUseCase,
  type GetArtistByIdArgs,
  GetArtistByIdUseCase,
  type GetArtistByLinkArgs,
  GetArtistByLinkUseCase,
  type GetArtistSongsArgs,
  GetArtistSongsUseCase,
  GetTopArtistUseCase
} from '#modules/artists/use-cases'

export class ArtistService {
  private readonly getArtistByIdUseCase: GetArtistByIdUseCase
  private readonly getArtistByLinkUseCase: GetArtistByLinkUseCase
  private readonly getArtistSongsUseCase: GetArtistSongsUseCase
  private readonly getArtistAlbumsUseCase: GetArtistAlbumsUseCase
  private readonly getTopArtistUseCase: GetTopArtistUseCase

  constructor() {
    this.getArtistByIdUseCase = new GetArtistByIdUseCase()
    this.getArtistByLinkUseCase = new GetArtistByLinkUseCase()
    this.getArtistSongsUseCase = new GetArtistSongsUseCase()
    this.getArtistAlbumsUseCase = new GetArtistAlbumsUseCase()
    this.getTopArtistUseCase = new GetTopArtistUseCase()
  }

  getArtistById = (args: GetArtistByIdArgs) => {
    return this.getArtistByIdUseCase.execute(args)
  }

  getArtistByLink = (args: GetArtistByLinkArgs) => {
    return this.getArtistByLinkUseCase.execute(args)
  }

  getArtistSongs = (args: GetArtistSongsArgs) => {
    return this.getArtistSongsUseCase.execute(args)
  }

  getArtistAlbums = (args: GetArtistAlbumsArgs) => {
    return this.getArtistAlbumsUseCase.execute(args)
  }

  getTopArtist = () => {
    return this.getTopArtistUseCase.execute()
  }
}
