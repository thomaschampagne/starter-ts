import { describe, expect, it } from 'vitest';
import { Sesame } from '../src';

describe('Sesame', () => {
  it('should create and assert password length', () => {
    // Given
    const expectedLength = 64;

    // When
    const password = Sesame.create(expectedLength);

    // Then
    expect(password.length).toEqual(expectedLength);
  });

  it('should return a string of the specified length', () => {
    // Given a specified length
    const length = 10;
    // When the password is created
    const password = Sesame.create(length);
    // Then the password should have the specified length
    expect(password).to.have.lengthOf(length);
  });

  it('should only contain characters from the available characters', () => {
    // Given a password of length 100
    const password = Sesame.create(100);
    const availableChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*{}(),.;:/<>?|_-+=';
    // When we check each character in the password
    for (const char of password) {
      // Then each character should be in the list of available characters
      expect(availableChars).to.include(char);
    }
  });

  it('should generate different passwords each time', () => {
    // Given two passwords of equal length
    const password1 = Sesame.create(10);
    const password2 = Sesame.create(10);
    // When we compare the two passwords
    // Then they should not be equal
    expect(password1).to.not.equal(password2);
  });
});
