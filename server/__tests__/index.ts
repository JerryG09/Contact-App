import request from 'supertest'

import app from '../src/app'

describe('App tests', () => {
  test('There is a home page', () => {
    return request(app)
      .get('/')
      .expect(200)
  });

  test('There is a user page', () => {
    return request(app)
      .get('/users')
      .expect(200)
  });

  test('There is a user page', () => {
    return request(app)
      .get('/contacts')
      .expect(200)
  })
})

describe("Get Endpoint", () => {
  test("should return all contacts", async () => {
    const res = await request(app)
      .get('/contacts');

    expect(res.body).toEqual({
      "data": [
        {
          id: 1,
          name: "Adams Cruff",
          phoneNumber: "09094939291",
          email: "adams@gmail.com"
        },
        {
          id: 2,
          name: "Lola Coker",
          phoneNumber: "09094939291",
          email: "lolcoker@gmail.com"
        },
        {
          id: 3,
          name: "Desmond Wande",
          phoneNumber: "09094939291",
          email: "desmondW@gmail.com"
        }
      ]
    })
  })
})

describe("Get Endpoint", () => {
  test("should return one contact", async () => {
    const res = await request(app)
      .get('/contacts/1')
    expect(res.body).toEqual({
      "data": {
        id: expect.any(Number),
        name: expect.any(String),
        phoneNumber: expect.any(String),
        email: expect.any(String)
      }
    })
  })
})

describe('Post Endpoint', () => {
  test('should create a new contact', async () => {
    const newContact = {
      id: 4645,
      name: 'Eze Babs',
      phoneNumber: '0808033221144',
      email: 'eze_babs@gmail.com'
    };

    const res = await request(app)
      .post('/contacts')
      .send(newContact);

    expect(res.status).toBe(201)
    expect(res.body.data).toEqual(newContact)
  })
})

describe("Put Endpoint", () => {
  test("should update a contact", async () => {
    const res = await request(app)
      .put('/contacts/2')
      .send({
        "id": "2",
        "name": "Lola Babz",
        "phoneNumber": "09094939290"
      })
    expect(res.body).toEqual({
      data: {
        "id": 2,
        "name": "Lola Babz",
        "phoneNumber": "09094939290",
        "email": "lolcoker@gmail.com"
      },
      "message": "user with id 2 edited succesfully"
    })
  })
})