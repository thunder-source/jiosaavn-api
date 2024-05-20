import { HTTPException } from 'hono/http-exception'
import type { z } from 'zod'
import type { IUseCase } from '#common/types'
import type { LyricsAPIResponseModel, LyricsModel } from '#modules/songs/models'
import { Endpoints } from '#common/constants'
import { useFetch } from '#common/helpers'
import { createSongLyricsPayload } from '#modules/songs/helpers'

export interface GetSongLyricsByIdArgs {
  songId: string
  dependency?: boolean
}

export class GetSongLyricsUseCase implements IUseCase<string, z.infer<typeof LyricsModel>> {
  constructor() {}

  async execute(songId: string) {
    const { data } = await useFetch<z.infer<typeof LyricsAPIResponseModel>>({
      endpoint: Endpoints.songs.lyrics,
      params: {
        lyrics_id: songId
      }
    })

    // console.log('dependency', dependency)

    // if (!data.lyrics) {
    //   if (dependency)
    //     return {
    //       lyrics: 'string',
    //       copyright: 'string',
    //       snippet: 'string'
    //     }
    //   throw new HTTPException(404, { message: 'lyrics not found' })
    // }

    return createSongLyricsPayload(data)
  }
}
