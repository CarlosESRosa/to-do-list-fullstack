const { expect } = require('chai');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const sinon = require('sinon');
const connection = require('../../models/connection');
const taskModel = require('../../models/taskModel');

describe('testes para a funcao getAll taskModel', () => {
  describe('Quando não existe nenhuma task', () => {
    const resolveConnection = [[]];
    const payloadTask = [];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resolveConnection);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retorna um array vazio', async () => {
      const response = await taskModel.getAll();
      expect(response).to.deep.equal(payloadTask);
    });
  });

  describe('quando existem tasks registradas no BD', () => {
    const resolveConnection = [[{
      id: 23,
      text: 'Estudar React',
      date: '2022-07-05T10:28:22.000Z',
    }]];
    const payloadTask = [{
      id: 23,
      text: 'Estudar React',
      date: '2022-07-05T10:28:22.000Z',
    }];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(resolveConnection);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('retorna um array com valores', async () => {
      const response = await taskModel.getAll();
      expect(response).to.deep.equal(payloadTask);
    });
  });
});
