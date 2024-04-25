import {
  type GetPlaylistByIdArgs,
  GetPlaylistByIdUseCase,
  type GetPlaylistByLinkArgs,
  GetPlaylistByLinkUseCase,
  type GetTopPlaylistByLinkArgs,
  GetTopPlaylistByLinkUseCase
} from '#modules/playlists/use-cases'

export class PlaylistService {
  private readonly getPlaylistByIdUseCase: GetPlaylistByIdUseCase
  private readonly getPlaylistByLinkUseCase: GetPlaylistByLinkUseCase
  private readonly getTopPlaylistByLinkUseCase: GetTopPlaylistByLinkUseCase

  constructor() {
    this.getPlaylistByIdUseCase = new GetPlaylistByIdUseCase()
    this.getPlaylistByLinkUseCase = new GetPlaylistByLinkUseCase()
    this.getTopPlaylistByLinkUseCase = new GetTopPlaylistByLinkUseCase()
  }

  getPlaylistById = (args: GetPlaylistByIdArgs) => {
    return this.getPlaylistByIdUseCase.execute(args)
  }

  getPlaylistByLink = (args: GetPlaylistByLinkArgs) => {
    return this.getPlaylistByLinkUseCase.execute(args)
  }
  getTopPlaylist = (args: GetTopPlaylistByLinkArgs) => {
    return this.getTopPlaylistByLinkUseCase.execute(args)
  }
}
