import { expect } from 'chai';
import {MongoConnectionFactory, MysqlConnectionFactory} from '../src/Connection/index';
import {IConnectionFactory} from '../src/Connection/IConnectionFactory';

const dbOpts = {
    host: "test",
    db: "test"
}

describe("Test Connection Factories", () => {

    it("Mongo Factory Should be instance of IConnectionFactory", () => {
        const instance = new MongoConnectionFactory(dbOpts.host, dbOpts.db);

        expect(instance).to.be.an('Object');

    });

    it("Mysql Factory Should be instance of IConnectionFactory", () => {
        const instance = new MysqlConnectionFactory(dbOpts.host, dbOpts.db);

        expect(instance).to.be.an('Object');

    });

    it("Should return a Promised MongoDb Connection", () => {
        const instance = new MongoConnectionFactory(dbOpts.host, dbOpts.db);

        const val = instance.CreateConnection();

        expect(val).to.be.an('Promise');

    });

    it("Should return a Promised Mysql Connection", () => {
        const instance = new MysqlConnectionFactory(dbOpts.host, dbOpts.db);

        const val = instance.CreateConnection();

        expect(val).to.be.an('Promise');

    })
})