import { ConnectionOptions } from 'typeorm'

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'kesavan.db.elephantsql.com',
  port: 5432,
  username: 'kzyrbfqv',
  password: '6wVEke8LiwA-7-gEpmJt3RJx5OkirZd1',
  database: 'kzyrbfqv',
  entities: ['dist/infra/postgres/entities/index.js']
}
