import { expect } from 'chai';
import { MongoConnectionFactory, MysqlConnectionFactory, ConnectionConfigurator } from '../src/Connection/index';
import {IConnectionFactory} from '../src/Connection/IConnectionFactory';

const configurator : ConnectionConfigurator = 
new ConnectionConfigurator("localhost", "teste");



const configuratorsql : ConnectionConfigurator = 
new ConnectionConfigurator("localhost", "teste", "default", "root", "tucano44", true, true, 3306);


describe("Test Connection Factories", () => {

    it("Mongo Factory Should be instance of IConnectionFactory", () => {

       
        const instance = new MongoConnectionFactory(configurator);

        expect(instance).to.be.an('Object');

    });

    it("Mysql Factory Should be instance of IConnectionFactory", () => {
        const instance = new MysqlConnectionFactory(configurator);

        expect(instance).to.be.an('Object');

    });

    it("Should return a Promised MongoDb Connection", () => {
        const instance = new MongoConnectionFactory(configurator);

        const val = instance.CreateConnection();

        expect(val).to.be.an('Promise');

    });

    it("Should return a Promised Mysql Connection", () => {
        const instance = new MysqlConnectionFactory(configuratorsql);

        const val = instance.CreateConnection();

        console.log(val)

        expect(val).to.be.an('Promise');

    })
})