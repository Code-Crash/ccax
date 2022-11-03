// TODO: We can integrate any third party logger here
export default class Logger {
  static readonly config: any = {
    debug: true,
    info: true,
    warn: true,
    error: true,
  };

  static info(...args: any) {
    if (args && args.length && (Logger.config.debug || Logger.config.info)) {
      // tslint:disable-next-line:no-console
      console.info(...args);
    }
  }

  static warn(...args: any) {
    if (args && args.length && (Logger.config.debug || Logger.config.warn)) {
      // tslint:disable-next-line:no-console
      console.warn(...args);
    }
  }

  static error(...args: any) {
    if (args && args.length && (Logger.config.debug || Logger.config.error)) {
      // tslint:disable-next-line:no-console
      console.error(...args);
    }
  }
}
