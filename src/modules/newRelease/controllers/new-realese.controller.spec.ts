import { beforeAll, describe, expect, it } from 'vitest'
import { NewReleasesAPIResponseModel, type NewReleasesAPIResponseModelApi, type NewReleasesModel } from '../models'
import { NewReleasesController } from './new-realese.controller'
import type { z } from 'zod'



describe('newReleasesController', () => {

  let newReleasesController: NewReleasesController

  beforeAll(() => {
    newReleasesController = new NewReleasesController()
    newReleasesController.initRoutes()
  })

  it('new data 123', async () => {
    const response = await newReleasesController.controller.request(
      '/newReleases?p=0&n=10&languages=hindi'
    )

    const { data } = (await response.json()) as {
      data: z.infer<typeof NewReleasesAPIResponseModelApi>
    }
    expect(() => NewReleasesAPIResponseModel.parse(data)).not.toThrow()
  })

})
