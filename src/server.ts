/* eslint-disable unicorn/no-process-exit */
import { createServer } from 'http';

import { Server } from 'node-static';

import { PORT } from './environment';
import { logger } from './logger';

const file = new Server('./public', { cache: 3600 });

const server = createServer((request, response) => {
  request
    .addListener('end', () => {
      file.serve(request, response);
    })
    .resume();
}).listen(PORT, () => logger.logSuccess(`Server started on port ${PORT}`));

const shutdownGracefully = () => {
  server.close((error) => {
    if (error) {
      logger.logError(error);
      process.exit(1);
    } else {
      process.exit(0);
    }
  });
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
