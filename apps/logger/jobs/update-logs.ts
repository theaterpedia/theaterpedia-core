import { defineJob } from "#pruvious";
import { query } from "#pruvious/server";
import { redisLogClient } from "../utils/redis-log-client";

export default defineJob({
  name: 'update-logs',
  interval: 3,
  callback: async () => {
    const client = await redisLogClient()
    const logs = await client.lRange('logs', 0, -1)

    if (logs.length) {
      await client.del('logs')
      await query('logs').createMany(logs.map((log) => JSON.parse(log)))
    }
  },
})
