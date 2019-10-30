import request from 'supertest'

import app from '../src/app'

describe('App tests', () => {
    test('There is a home page', () => {
        return request(app)
          .get('/')
          .expect(200)
    })
})

describe('App test', () => {
  test('There is a user page', () => {
    return request(app)
      .get('/users')
      .expect(200)
  })
})