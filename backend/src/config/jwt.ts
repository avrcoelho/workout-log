import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '..', '..', `.env.${process.env.NODE_ENV}`),
});

const jwtConfig = {
  secret: process.env.JWT_SECRET_KEY,
};

export default jwtConfig;
