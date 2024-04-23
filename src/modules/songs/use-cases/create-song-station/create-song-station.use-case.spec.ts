import { beforeAll, describe, expect, it } from 'vitest'
import { CreateSongStationUseCase } from '#modules/songs/use-cases'

describe('CreateSongStation', () => {
  let createSongStation: CreateSongStationUseCase

  beforeAll(() => {
    createSongStation = new CreateSongStationUseCase()
  })

  it('should create a song station', async () => {
    const station = await createSongStation.execute('3IoDK8qI')

    expect(station).toBeDefined()
  })
})
