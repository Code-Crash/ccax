// TODO: In Progress
/**
 * @file config.ts - Purpose of this file will be to hold the configuration or customization.
 */

/**
 * This interface will be used as ConfigOptions for Config class
 * @interface ConfigOptions
 * @property {boolean} isSilentExceptions When this is true, we will not throw Error/Exception, we will only do console log (if logs are enabled)
 * @property {boolean} isLoggerEnabled
 */
interface ConfigOptions {
  isSilentExceptions?: boolean;
  isLoggerEnabled?: boolean;
}

/**
 * This constant will be used as validator for property assigning to the Config class instance
 */
const CONFIG_PROPERTIES = {
  isSilentExceptions: 'boolean',
  isLoggerEnabled: 'boolean',
};

export default class Config {
  public static instance: Config = null; // Note: Assign "new Config()" here to avoid lazy initialization
  isSilentExceptions: boolean = false;
  isLoggerEnabled: boolean = true;

  constructor(options?: ConfigOptions) {
    // Check if the object is already created, if yes, return it
    if (Config.instance) {
      return Config.instance;
    }
    // Check options and assign the values to the options
    if (options) {
      Object.keys(CONFIG_PROPERTIES).forEach((key) => {
        if (options.hasOwnProperty(key) && typeof options[key] === CONFIG_PROPERTIES[key]) {
          this[key] = options[key];
        }
      });
    }

    // Assign the newly created instance
    Config.instance = this;
  }
}

// Config

export const setConfigOptions = (options: ConfigOptions) => {
  return new Config(options);
};
