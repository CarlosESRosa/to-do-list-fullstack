const { expect } = require('chai');
const sinon = require('sinon');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const taskService = require('../../services/taskService');
const taskController = require('../../controllers/taskController');

describe('testes para a funcao getAll productController', () => {
  describe('quando existem produtos no banco de dados', async () => {
    const response = {};
    const request = {};

    const taskMock = [{
      id: 23,
      text: 'Estudar React',
      date: '2022-07-05T10:28:22.000Z',
    }];

    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(taskService, 'getAll').resolves(taskMock);
    });

    afterEach(() => {
      taskService.getAll.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await taskController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await taskController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});
