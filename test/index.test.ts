import { describe, expect, it } from 'vitest'
import hello from '../src/index.js'

describe('hello', () => {
  it('should be "Hello World"', () => {
    expect(hello).toBe('Hello World')
  })
})
