"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../src/Connection/index");
const configurator = new index_1.ConnectionConfigurator("localhost", "teste");
describe("Test Connection Factories", () => {
    it("Mongo Factory Should be instance of IConnectionFactory", () => {
        const instance = new index_1.MongoConnectionFactory(configurator);
        chai_1.expect(instance).to.be.an('Object');
    });
    it("Mysql Factory Should be instance of IConnectionFactory", () => {
        const instance = new index_1.MysqlConnectionFactory(configurator);
        chai_1.expect(instance).to.be.an('Object');
    });
    it("Should return a Promised MongoDb Connection", () => {
        const instance = new index_1.MongoConnectionFactory(configurator);
        const val = instance.CreateConnection();
        chai_1.expect(val).to.be.an('Promise');
    });
    it("Should return a Promised Mysql Connection", () => {
        const instance = new index_1.MysqlConnectionFactory(configurator);
        const val = instance.CreateConnection();
        chai_1.expect(val).to.be.an('Promise');
    });
});
//# sourceMappingURL=ConnectionFactoryTest.js.map