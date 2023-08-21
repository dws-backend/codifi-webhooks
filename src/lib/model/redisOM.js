import { createClient } from "redis";

export const redis = createClient();

export const getRedisOMConnection = async () => {
  if (!redis.isOpen) {
    await redis.connect(process.env.REDIS_URL);
  }
};
