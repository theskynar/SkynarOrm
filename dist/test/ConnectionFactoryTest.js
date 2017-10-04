"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../src/Connection/index");
const dbOpts = {
    host: "test",
    db: "test"
};
describe("Test Connection Factories", () => {
    it("Mongo Factory Should be instance of IConnectionFactory", () => {
        const instance = new index_1.MongoConnectionFactory(dbOpts.host, dbOpts.db);
        chai_1.expect(instance).to.be.an('Object');
    });
    it("Mysql Factory Should be instance of IConnectionFactory", () => {
        const instance = new index_1.MysqlConnectionFactory(dbOpts.host, dbOpts.db);
        chai_1.expect(instance).to.be.an('Object');
    });
    it("Should return a Promised MongoDb Connection", () => {
        const instance = new index_1.MongoConnectionFactory(dbOpts.host, dbOpts.db);
        const val = instance.CreateConnection();
        chai_1.expect(val).to.be.an('Promise');
    });
    it("Should return a Promised Mysql Connection", () => {
        const instance = new index_1.MysqlConnectionFactory(dbOpts.host, dbOpts.db);
        const val = instance.CreateConnection();
        chai_1.expect(val).to.be.an('Promise');
    });
});
//# sourceMappingURL=ConnectionFactoryTest.js.map