const { expect } = require('chai');
const sinon = require('sinon');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const taskService = require('../../services/taskService');
const taskModel = require('../../models/taskModel');

describe('testes para a funcao getAll taskService', () => {
  const resolve = [{
    id: 23,
    text: 'Estudar React',
    date: '2022-07-05T10:28:22.000Z',
  }];
  const payloadTask = [{
    id: 23,
    text: 'Estudar React',
    date: '2022-07-05T10:28:22.000Z',
  }];

  beforeEach(() => {
    sinon.stub(taskModel, 'getAll').resolves(resolve);
  });

  afterEach(() => {
    taskModel.getAll.restore();
  });

  it('retorna um array com valores', async () => {
    const response = await taskService.getAll();
    expect(response).to.deep.equal(payloadTask);
  });
});
