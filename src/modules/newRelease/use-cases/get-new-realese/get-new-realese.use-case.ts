import { HTTPException } from 'hono/http-exception'
import type { IUseCase } from '#common/types'
import type { z } from 'zod'
import type { NewReleasesAPIResponseModel, NewReleasesAPIResponseModelApi } from '#modules/newRelease/models'
import { createNewReleasesPayload } from '#modules/newRelease/helpers'
import { useFetch } from '#common/helpers'
import { Endpoints } from '#common/constants'

export interface GetNewRealeseArgs {
  language: string
  page: number
  limit: number
}

export class GetNewRealeseUseCase implements IUseCase<GetNewRealeseArgs, z.infer<typeof NewReleasesAPIResponseModel>> {
  constructor() {}

  async execute({ language, page, limit }: GetNewRealeseArgs): Promise<z.infer<typeof NewReleasesAPIResponseModel>> {
    const { data } = await useFetch<z.infer<typeof NewReleasesAPIResponseModelApi>>({
      endpoint: Endpoints.newReleases.id,
      params: { p: page, n: limit, languages: language }
    })

    if (!data) throw new HTTPException(404, { message: 'album not found' })

    return {
      total: data?.total ? Number(data.total) : data.data.length,
      lastPage: data.last_page === undefined ? false : data.last_page,
      result: data.data?.map(createNewReleasesPayload) || []
    }
  }
}
