/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');

const agent = session(app);

describe("Rutas pokemon", ()=>{
  describe("If only /pokemon, should get 200 and all pokemon", () => {
    describe("Get /pokemon", () => {
      it("Should get 200 when ", () => {
      agent.get("/pokemon").then(() => done());
      })
    })
    describe("GET /pokemon/:id", () => {
      it("Should get 200 when id is received", () =>
        agent.get("/pokemon/11").expect(200));
    });
    describe("GET /pokemon?name=aaa", () => {
      it("Should get 200 when name received", () =>
        agent.get("/pokemon?name=pikachu"));
    });
  });
})
