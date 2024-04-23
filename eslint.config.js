import { config } from '@kolhe/eslint-config'

export default config(
  [
    {
      files: ['src/**/*.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],
  {
    prettier: false,
    markdown: true
  }
)
