import { z } from 'zod'
import { SongAPIResponseModel, SongModel } from '#modules/songs/models'

export const ArtistSongAPIResponseModel = z.object({
  artistId: z.string(),
  name: z.string(),
  subtitle: z.string(),
  image: z.string(),
  follower_count: z.string(),
  type: z.string(),
  isVerified: z.boolean(),
  dominantLanguage: z.string(),
  dominantType: z.string(),
  topSongs: z.object({
    songs: z.array(SongAPIResponseModel),
    total: z.number()
  })
})

export const ArtistSongModel = z.object({
  total: z.number(),
  songs: z.array(SongModel)
})


export const TopArtistAPIResponseModelBase = z.object({
  artistId: z.string(),
  name: z.string(),
  image: z.string(),
  follower_count: z.string(),
  perma_url: z.string(),
})

export const TopArtistAPIResponseModel = z.object({
  top_artists: z.array(TopArtistAPIResponseModelBase),
})


export const TopArtistModelBase = z.object({
  artistid: z.string(),
  name: z.string(),
  image: z.string(),
  followerCount: z.string(),
  url: z.string(),
})
export const TopArtistModel = z.object({
  results: z.array(TopArtistModelBase),
})
