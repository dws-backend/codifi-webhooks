import { createClient } from "redis";

export const redis = createClient({ url: process.env.REDIS_URL });

export const getRedisOMConnection = async () => {
  if (!redis.isOpen) {
    await redis.connect();
  }
};
