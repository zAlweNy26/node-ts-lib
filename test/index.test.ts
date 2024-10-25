import hello from '@/index.js'
import { describe, expect, it } from 'vitest'

describe('hello', () => {
  it('should be "Hello World"', () => {
    expect(hello).toBe('Hello World')
  })
})
