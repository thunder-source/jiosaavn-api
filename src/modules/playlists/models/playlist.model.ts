import { z } from 'zod'
import { DownloadLinkModel } from '#common/models'
import { SongAPIResponseModel, SongModel } from '#modules/songs/models'
import { ArtistMapModel } from '#modules/artists/models'

export const PlaylistAPIResponseModel = z
  .object({
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
    list: z.array(SongAPIResponseModel),
    more_info: z.object({
      uid: z.string(),
      is_dolby_content: z.boolean(),
      subtype: z.array(z.string()).default([]),
      last_updated: z.string(),
      username: z.string(),
      firstname: z.string(),
      lastname: z.string(),
      is_followed: z.string(),
      isFY: z.boolean(),
      follower_count: z.string(),
      fan_count: z.string(),
      playlist_type: z.string(),
      share: z.string(),
      sub_types: z.array(z.string()),
      images: z.array(z.string()),
      H2: z.string().nullable(),
      subheading: z.string(),
      video_count: z.string(),
      artists: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          role: z.string(),
          image: z.string(),
          type: z.string(),
          perma_url: z.string()
        })
      )
    })
  })
  .extend({
    description: z.string()
  })

export const PlaylistModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  year: z.number().nullable(),
  type: z.string(),
  playCount: z.number().nullable(),
  language: z.string(),
  explicitContent: z.boolean(),
  songCount: z.number().nullable(),
  url: z.string(),
  image: z.array(DownloadLinkModel),
  songs: z.array(SongModel).nullable(),
  artists: z.array(ArtistMapModel).nullable()
})

export const TopPlaylistModelItem = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  type: z.string(),
  image: z.string(),
  url: z.string().url(),
  explicitContent: z.boolean(),
  songCount: z.number().nullable(),
  firstname: z.string(),
  followerCount: z.number().nullable(),
  lastUpdated: z.number().nullable(),
  uid: z.string()
})

export const TopPlaylistModel = z.object({
  count: z.number(),
  lastPage: z.boolean(),
  result: z.array(TopPlaylistModelItem)
})

export const TopPlaylistAPIResponseModelSingleItem = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  type: z.string(),
  image: z.string(),
  perma_url: z.string(),
  more_info: z.object({
    song_count: z.string(),
    firstname: z.string(),
    follower_count: z.string(),
    last_updated: z.string(),
    uid: z.string()
  }),
  explicit_content: z.string(),
  mini_obj: z.boolean()
})

export const TopPlaylistAPIResponseModel = z.object({
  data: z.array(TopPlaylistAPIResponseModelSingleItem),
  count: z.number(),
  last_page: z.boolean()
})
