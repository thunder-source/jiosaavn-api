import { beforeAll, describe, expect, it } from 'vitest'
import { GetTopArtistUseCase } from '#modules/artists/use-cases'
import { TopArtistModel } from '#modules/artists/models'

describe('GetTopArtist', () => {
  let getTopArtistUseCase: GetTopArtistUseCase

  beforeAll(() => {
    getTopArtistUseCase = new GetTopArtistUseCase()
  })

  it('should get artist songs by artist id and return a list of songs', async () => {
    const artists = await getTopArtistUseCase.execute()

    expect(() => TopArtistModel.parse(artists)).not.toThrow()
  })
})
