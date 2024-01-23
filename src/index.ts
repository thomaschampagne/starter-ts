import crypto from 'crypto';

/**
 * @author Thomas Champagne
 * @description Password generator used as demo for the purpose of this starter library
 */
export class Sesame {
  private static readonly AVAILABLE_CHARS =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*{}(),.;:/<>?|_-+=';

  /**
   * Create a password according to the length parameter
   *
   * @param length the length of the password to be created.
   * @returns password created
   */
  public static create(length: number): string {
    const availableChars = Sesame.AVAILABLE_CHARS;
    const randomChars = new Array(length);
    const cryptoArray = new Uint32Array(length);

    crypto.getRandomValues(cryptoArray);

    for (let i = 0; i < length; i++) {
      const randomIndex = cryptoArray[i] % availableChars.length;
      randomChars[i] = availableChars.charAt(randomIndex);
    }

    return randomChars.join('');
  }
}
