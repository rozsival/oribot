import { createServer } from 'http';

import { Server } from 'node-static';

import { PORT } from './environment';
import { logger } from './logger';

const file = new Server('./public', { cache: 3600 });

createServer((request, response) => {
  request
    .addListener('end', () => {
      file.serve(request, response);
    })
    .resume();
}).listen(PORT, () => logger.logSuccess(`Server started on port ${PORT}`));
