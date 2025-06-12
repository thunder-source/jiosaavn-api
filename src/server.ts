import { App } from './app'
import {
  AlbumController,
  ArtistController,
  NewReleasesController,
  SearchController,
  SongController
} from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController(),
  new NewReleasesController()
]).getApp()

export default app
