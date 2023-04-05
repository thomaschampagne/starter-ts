/**
 * @author Thomas Champagne
 * @description Password generator used as demo for the purpose of this starter library
 */
export class Sesame {
  private static readonly AVAILABLE_CHARS =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*{}(),.;:/<>?|_-+=';

  /**
   * Create a password according length parameter
   *
   * @param length the length of the password to be created.
   * @returns password created
   */
  public static create(length: number): string {
    const availableChars = Sesame.AVAILABLE_CHARS;
    const randomChars = Array.from({ length }, () =>
      availableChars.charAt(Math.floor(Math.random() * availableChars.length))
    );
    return randomChars.join('');
  }
}
