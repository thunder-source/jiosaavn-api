import { z } from 'zod'
import { DownloadLinkModel } from '#common/models'
import { SongAPIResponseModel, SongModel } from '#modules/songs/models'

export const NewReleasesAPIResponseModelBase = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  header_desc: z.string(),
  type: z.string(),
  perma_url: z.string(),
  image: z.string(),
  language: z.string(),
  year: z.string(),
  play_count: z.string(),
  explicit_content: z.string(),
  list_count: z.string(),
  list_type: z.string(),
  list: z.string(),
  more_info: z.object({
    artistMap: SongAPIResponseModel.shape.more_info.shape.artistMap,
    song_count: z.string(),
    release_date: z.string()
  })
})

export const NewReleasesModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  year: z.number().nullable(),
  type: z.string(),
  playCount: z.number().nullable(),
  language: z.string(),
  explicitContent: z.boolean(),
  artists: z.object(SongModel.shape.artists.shape),
  songCount: z.number().nullable(),
  url: z.string(),
  image: z.array(DownloadLinkModel)
  // songs: z.array(SongModel).nullable()
})

export const NewReleasesAPIResponseModel = z.object({
  total: z.number(),
  lastPage: z.boolean(),
  result: z.array(NewReleasesModel)
})
export const NewReleasesAPIResponseModelApi = z.object({
  total: z.number(),
  last_page: z.boolean(),
  data: z.array(NewReleasesAPIResponseModelBase)
})

export interface Weather {
  id: string
  title: string
  subtitle: string
  header_desc: string
  type: string
  perma_url: string
  image: string
  language: string
  year: string
  play_count: string
  explicit_content: string
  list_count: string
  list_type: string
  list: string
  more_info: MoreInfo
  button_tooltip_info?: null[] | null
}
export interface MoreInfo {
  song_count: string
  release_date: string
  artistMap: ArtistMap
}
export interface ArtistMap {
  primary_artists?: null[] | null
  featured_artists?: null[] | null
  artists?: ArtistsEntity[] | null
}
export interface ArtistsEntity {
  id: string
  name: string
  role: string
  image: string
  type: string
  perma_url: string
}
