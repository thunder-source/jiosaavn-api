import { beforeAll, describe, expect, it } from 'vitest'
import { NewReleasesModel } from '../../models'
import { GetNewRealeseUseCase } from './get-new-realese.use-case'

describe('GetAlbumById', () => {
  let getNewRealeseUseCase: GetNewRealeseUseCase

  beforeAll(() => {
    getNewRealeseUseCase = new GetNewRealeseUseCase()
  })

  it('should get album by id 123', async () => {
    const album = await getNewRealeseUseCase.execute('23241654')

    expect(() => NewReleasesModel.parse(album)).not.toThrow()
  })

})
