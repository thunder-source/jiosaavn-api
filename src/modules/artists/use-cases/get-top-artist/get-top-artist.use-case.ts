import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { TopArtistAPIResponseModel, TopArtistModel } from '#modules/artists/models'
import { createTopArtistPayload } from '#modules/songs/helpers'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'

// export interface GetArtistSongsArgs {
//   artistId: string
//   page: number
//   sortBy: 'popularity' | 'latest' | 'alphabetical'
//   sortOrder: 'asc' | 'desc'
// }

export class GetTopArtistUseCase implements IUseCase<z.infer<typeof TopArtistModel>> {
  constructor() {}

  async execute() {
    const { data } = await useFetch<z.infer<typeof TopArtistAPIResponseModel>>({
      endpoint: Endpoints.artists.topArtists,
      params: {}
    })

    if (!data) throw new HTTPException(404, { message: 'artist songs not found' })

    return {
      results: data.top_artists?.map(createTopArtistPayload)
    }
  }
}
