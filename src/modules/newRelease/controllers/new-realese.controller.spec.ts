import { beforeAll, describe, expect, it } from 'vitest'
import { NewReleasesModel } from '../models'
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
      '/newRealistes?link=https://www.jiosaavn.com/album/future-nostalgia/ITIyo-GDr7A_'
    )

    const { data } = (await response.json()) as { data: z.infer<typeof NewReleasesModel> }
    expect(() => NewReleasesModel.parse(data)).not.toThrow()
  })

})
