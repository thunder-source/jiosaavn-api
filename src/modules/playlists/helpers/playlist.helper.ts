import type { z } from 'zod'
import type {
  PlaylistAPIResponseModel,
  PlaylistModel,
  TopPlaylistAPIResponseModelSingleItem,
  TopPlaylistModelItem
} from '#modules/playlists/models'
import { createSongPayload } from '#modules/songs/helpers'
import { createImageLinks } from '#common/helpers'
import { createArtistMapPayload } from '#modules/artists/helpers'

export const createPlaylistPayload = (
  playlist: z.infer<typeof PlaylistAPIResponseModel>
): z.infer<typeof PlaylistModel> => ({
  id: playlist.id,
  name: playlist.title,
  description: playlist.header_desc,
  type: playlist.type,
  year: playlist.year ? Number(playlist.year) : null,
  playCount: playlist.play_count ? Number(playlist.play_count) : null,
  language: playlist.language,
  explicitContent: playlist.explicit_content === '1',
  url: playlist.perma_url,
  songCount: playlist.list_count ? Number(playlist.list_count) : null,
  artists: playlist.more_info.artists?.map(createArtistMapPayload) || null,
  image: createImageLinks(playlist.image),
  songs: (playlist.list && playlist.list?.map(createSongPayload)) || null
})
export const createTopPlaylistPayload = (
  playlist: z.infer<typeof TopPlaylistAPIResponseModelSingleItem>
): z.infer<typeof TopPlaylistModelItem> => ({
  id: playlist.id,
  name: playlist.title,
  description: playlist.subtitle,
  type: playlist.type,
  image: playlist.image,
  explicitContent: playlist.explicit_content === '1',
  url: playlist.perma_url,
  songCount: playlist.more_info.song_count ? Number(playlist.more_info.song_count) : null,
  followerCount: playlist.more_info?.follower_count ? Number(playlist.more_info.follower_count) : null,
  firstname: playlist.more_info.firstname,
  lastUpdated: playlist.more_info?.last_updated ? Number(playlist.more_info.last_updated) : null,
  uid: playlist.more_info.uid
})
