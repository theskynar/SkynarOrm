import { ConnectionConfigurator } from './ConnectionConfigurator';
import { SkynarOrm } from '../index';
import { Container } from 'typedi';
import { IConnectionFactory } from './IConnectionFactory';

export class MongoConnectionFactory implements IConnectionFactory {

    constructor(private connectionConfigurator: ConnectionConfigurator) {
        connectionConfigurator = connectionConfigurator;
    }

    public async CreateConnection(): Promise<SkynarOrm.Connection> {

        SkynarOrm.useContainer(Container);

        const connection : SkynarOrm.Connection = SkynarOrm.getConnectionManager().create({
            type: "mongodb",
            host: this.connectionConfigurator.host,
            username: this.connectionConfigurator.user,
            password: this.connectionConfigurator.pass,
            database: this.connectionConfigurator.db,
            logging: this.connectionConfigurator.log,
            synchronize: this.connectionConfigurator.sync,
        });

        return await connection.connect();
    }

    public DestroyConnection(): boolean {
        return false;
    }
}