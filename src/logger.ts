import consola from 'consola';

export const logger = {
  logError: (error: Error) => consola.error(error),
  logInfo: (message: string) => consola.info(message),
  logSuccess: (message: string) => consola.success(message),
};
