import { HTTPException } from 'hono/http-exception'
import type { IUseCase } from '#common/types'
import type { z } from 'zod'
import { createAlbumPayload } from '#modules/albums/helpers'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'
import { NewReleasesAPIResponseModel, NewReleasesModel } from '../../models'

export class GetNewRealeseUseCase implements IUseCase<string, z.infer<typeof NewReleasesModel>> {
  constructor() { }

  async execute(id: string) {
    const { data } = await useFetch<z.infer<typeof NewReleasesAPIResponseModel>>({
      endpoint: Endpoints.newReleases.id,
      params: { albumid: id }
    })

    if (!data) throw new HTTPException(404, { message: 'album not found' })

    return createAlbumPayload(data)
  }
}
