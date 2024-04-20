import { createClient, type RedisClientType } from 'redis'
import { sleep } from '#pruvious'

let client: RedisClientType | undefined
let status: 'initial' | 'connecting' | 'ready' = 'initial'

/**
 * Return the Redis database client used for logging.
 *
 * @throws an error if the connection cannot be established.
 */
export async function redisLogClient(force = false) {
  if (status === 'initial' || (!client && force)) {
    const url = useRuntimeConfig().redisLogUrl

    if (url) {
      client = createClient({ url })
      status = 'connecting'
      await client.connect()
    }

    status = 'ready'
  }

  while (status === 'connecting') {
    sleep(50)
  }

  return client!
}
