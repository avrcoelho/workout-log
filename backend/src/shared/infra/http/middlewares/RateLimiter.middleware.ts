import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from 'redis';

@Injectable()
class RateLimiterMiddleware implements NestMiddleware {
  redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASS,
  });

  limiter = new RateLimiterRedis({
    storeClient: this.redisClient,
    keyPrefix: 'rateLimite',
    points: 5,
    duration: 1,
    blockDuration: 60 * 5,
  });

  async use(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      await this.limiter.consume(request.ip);

      return next();
    } catch (error) {
      throw new HttpException('Too many requests', 429);
    }
  }
}

export default RateLimiterMiddleware;
