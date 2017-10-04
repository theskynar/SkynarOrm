import { ConnectionConfigurator } from './ConnectionConfigurator';
import { Connection, createConnection } from 'typeorm';
import { IConnectionFactory } from './IConnectionFactory';

export class MongoConnectionFactory implements IConnectionFactory {
    

    constructor(private connectionConfigurator: ConnectionConfigurator) {
        connectionConfigurator = connectionConfigurator;
    }

    public async CreateConnection(): Promise<Connection> {

        const connection : Promise<Connection> = createConnection({
            type: "mongodb",
            host: this.connectionConfigurator.host,
            username: this.connectionConfigurator.user,
            password: this.connectionConfigurator.pass,
            database: this.connectionConfigurator.db,
            logging: this.connectionConfigurator.log,
            synchronize: this.connectionConfigurator.sync,
        });
        return await connection;
    }

    public DestroyConnection(): boolean {
        return false;
    }
}