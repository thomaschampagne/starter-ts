import { describe, expect, it } from 'vitest';
import { Sesame } from '../src';

describe('Sesame', () => {
  it('should create and assert password length', () => {
    // Given
    const expectedLength = 16;

    // When
    const password = Sesame.create(expectedLength);

    // Then
    expect(password.length).toEqual(expectedLength);
  });
});
