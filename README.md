# CCAX

## Overview

This project is to utilize when we want to assert some params, it can be string, number or any instance of any class.
The motivation behind this is to avoid if-else chains just to validate the parameters. see https://stackoverflow.com/q/73795540/2961427 for more details.

### Use Case:

1. We can use this library to safeguard any methods before actual logic execution
2. It can reduce `if-else` chain anywhere in the code by pre-asserting the required/optional parameters.

## How to Use

1. First, you will have to install the `CCAX`

    ```bash
      npm i ccax
    ```
2. You will have to require the `CCAX`

    ```ts
      import ccax from 'ccax';

      // Start using it.
      ccax.assertString('String Value'); // Will not throw any error, as it's a valid string
    ```

    or if you are using node with require, use the below example"

    ```js
      const ccax = require('ccax').default;
      // Start using it.
      ccax.assertString(true, 'name'); // Throws the Error: `Param name must be a String` because value is boolean
    ```

3. You can use try catch for better error handling.


### Note: More example easy/complex will be added soon
