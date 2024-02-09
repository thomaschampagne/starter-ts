import { describe, expect, it } from '@jest/globals';
import { Sesame } from '../src';

describe('Sesame ', () => {
  describe('Create password ', () => {
    it('should create and assert password length', () => {
      // Given
      const expectedLength = 64;

      // When
      const password = Sesame.generate(expectedLength);

      // Then
      expect(password.length).toEqual(expectedLength);
    });

    it('should return a string of the specified length', () => {
      // Given a specified length
      const length = 10;
      // When the password is created
      const password = Sesame.generate(length);
      // Then the password should have the specified length
      expect(password).toHaveLength(length);
    });

    it('should only contain characters from the available characters', () => {
      // Given a password of length 100
      const password = Sesame.generate(100);
      const availableChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*{}(),.;:/<>?| _-+=';
      // When we check each character in the password
      for (const char of password) {
        // Then each character should be in the list of available characters
        expect(availableChars).toContain(char);
      }
    });

    it('should generate different passwords each time', () => {
      // Given two passwords of equal length
      const password1 = Sesame.generate(10);
      const password2 = Sesame.generate(10);
      // When we compare the two passwords
      // Then they should not be equal
      expect(password1).not.toEqual(password2);
    });

    // Additional test for handling invalid inputs
    it('should throw an error for invalid length', () => {
      // Given an invalid length
      const invalidLength = -1;
      // When we try to create a password with the invalid length
      // Then it should throw an error
      expect(() => Sesame.generate(invalidLength)).toThrow('Length must be a positive integer');
    });
  });

  describe('Test passwords', () => {
    it('should calculate password entropy', () => {
      // Given
      const password = Sesame.generate(32);
      const expectedEntropy = 180;

      // When
      const entropy = Sesame.entropy(password);

      // Then
      expect(entropy).toBeGreaterThanOrEqual(expectedEntropy);
    });

    it('should return zero entropy for an empty password', () => {
      // Given
      const password = '';

      // When
      const entropy = Sesame.entropy(password);

      // Then
      expect(entropy).toEqual(0);
    });
  });
});
