import crypto from 'crypto';

/**
 * @author Thomas Champagne
 * @description Password generator used as demo for the purpose of this starter library
 */
export class Sesame {
  public static readonly AVAILABLE_CHARS =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*{}(),.;:/<>?|_-+=';

  /**
   * Generate a password according to the length parameter
   *
   * @param length the length of the password to be created.
   * @returns password created
   */
  public static generate(length: number): string {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error('Length must be a positive integer');
    }

    const availableChars = Sesame.AVAILABLE_CHARS;
    const cryptoArray = new Uint32Array(length);
    crypto.getRandomValues(cryptoArray);
    return Array.from(cryptoArray, num => availableChars.charAt(num % availableChars.length)).join('');
  }

  /**
   * This function calculates the entropy of a given password.
   * Entropy is a measure of the unpredictability or randomness of a set of data.
   * In the context of passwords, a higher entropy means a more secure password.
   *
   * @param password the password to calculate the entropy for.
   * @returns the calculated entropy of the password.
   */
  public static entropy(password: string): number {
    // Define an array of regular expressions and their corresponding entropy values
    const classes: Array<[RegExp, number]> = [
      [/^[0-9]+$/, 3.322], // numeric
      [/^[0-9A-F]+$/, 4.0], // hexadecimal
      [/^([A-Z]+|[a-z]+)$/, 4.7], // alphabetic
      [/^([A-Z0-9]+|[a-z0-9]+)$/, 5.17], // alphanumeric
      [/^[A-Za-z]+$/, 5.7], // case-insensitive alphabetic
      [/^[A-Za-z0-9]+$/, 5.954], // case-insensitive alphanumeric
      [/^[a-z0-9!"#$%&'()*+,.\\/:;<=>?@\\[\] ^_`{|}~-]*$/i, 6.555], // case-insensitive alphanumeric and special characters
      [/^[\p{Cc}\p{Cn}\p{Cs}]+$/gu, 7.768], // unicode control characters
      [/^.+$/, 8.0] // all characters
    ];

    // Function to calculate bits per symbol based on password characters
    const bitsPerSymbol = (passwd: string): number => {
      // Return by default
      let bitsFound = 0;

      // Iterate over the classes array
      for (const [pattern, bits] of classes) {
        // If the password matches a regular expression, return the associated entropy value
        if (pattern.test(passwd)) {
          bitsFound = bits;
        }
      }
      return bitsFound;
    };

    // Return the total entropy by multiplying the bits per symbol by the length of the password
    return bitsPerSymbol(password) * password.length;
  }
}
