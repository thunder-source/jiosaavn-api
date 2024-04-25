import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { TopPlaylistAPIResponseModel, TopPlaylistModel } from '#modules/playlists/models'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'
import { createTopPlaylistPayload } from '#modules/playlists/helpers'

export interface GetTopPlaylistByLinkArgs {
  limit: number
  page: number
}

export class GetTopPlaylistByLinkUseCase implements IUseCase<GetTopPlaylistByLinkArgs, z.infer<typeof TopPlaylistModel>> {
  constructor() { }

  async execute({ limit, page }: GetTopPlaylistByLinkArgs) {
    const { data } = await useFetch<z.infer<typeof TopPlaylistAPIResponseModel>>({
      endpoint: Endpoints.playlists.topPlaylist,
      params: {
        n: limit,
        p: page,
      }
    })

    if (!data) throw new HTTPException(404, { message: 'Top Playlist not found' })

    const playlist = data.data.map((item) => createTopPlaylistPayload(item))

    return {
      result: playlist,
      count: data.count,
      lastPage: data?.last_page
    }
  }
}
