import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { NewReleasesService } from '../services'
import { NewReleasesModel } from '../models'
import type { Routes } from '#common/types'

const AllLanguages = [
  "hindi",
  "tamil",
  "telugu",
  "marathi",
  "gujarati",
  "english",
  "bengali",
  "kannada",
  "bhojpuri",
  "punjabi",
  "malayalam",
  "urdu",
  "rajasthani",
  "odia",
  "assamese",
  "haryanvi"
]


export class NewReleasesController implements Routes {

  public controller: OpenAPIHono
  private newReleasesService: NewReleasesService

  constructor() {
    this.controller = new OpenAPIHono()
    this.newReleasesService = new NewReleasesService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/newReleases',
        tags: ['newReleases'],
        summary: 'Retrieve an New Realeases Album',
        description: `Retrieve an New Realeases Album by languages  // ${AllLanguages} // page no and limit.`,
        operationId: 'getAlbumByIdOrLink',
        request: {
          query: z.object({
            language: z.string().optional().openapi({
              title: 'Language',
              description: 'The unique ID of the album',
              type: 'string',
              example: 'hindi',
              default: ''
            }),
            page: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Page Number',
              description: 'The page number of the search results to retrieve',
              type: 'integer',
              example: 0,
              default: 0
            }),
            limit: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Limit',
              description: 'Number of search results per page',
              type: 'integer',
              example: 10,
              default: 10
            })
          })
        },
        responses: {
          200: {
            description: 'Successful response with New Realeases Album',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates the success status of the request.',
                    type: 'boolean',
                    example: true
                  }),
                  data: NewReleasesModel.openapi({
                    title: 'New Realeases Album',
                    description: 'Recently New Realeases Album'
                  })
                })
              }
            }
          },
          400: { description: 'Bad request due to missing or invalid query parameters.' },
          404: { description: 'The album could not be found with the provided ID or link.' }
        }
      }),
      async (ctx) => {
        const { page, language, limit } = ctx.req.valid('query')
        console.log("response", page, language, limit)

        const response = await this.newReleasesService.getNewRealese({ language: language || 'hindi', page: page || 0, limit: limit || 10 })
        console.log("response", response, "errojdsfjadsfjaods")
        return ctx.json({ success: true, data: response })
      }
    )
  }
}
