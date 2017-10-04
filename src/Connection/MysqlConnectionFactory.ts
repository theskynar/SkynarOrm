import { Connection, createConnection } from 'typeorm';
import { IConnectionFactory } from './IConnectionFactory';
import { ConnectionConfigurator } from "./ConnectionConfigurator";

export class MysqlConnectionFactory implements IConnectionFactory {
    

    constructor(private connectionConfigurator: ConnectionConfigurator) {
        connectionConfigurator = connectionConfigurator;
    }

    public async CreateConnection(): Promise<Connection> {

        const connection : Promise<Connection> = createConnection({
            type: "mysql",
            name: this.connectionConfigurator.connName,
            host: this.connectionConfigurator.host,
            port: this.connectionConfigurator.port,
            username: this.connectionConfigurator.user,
            password: this.connectionConfigurator.pass,
            database: this.connectionConfigurator.db,
            logging: this.connectionConfigurator.log,
            synchronize: this.connectionConfigurator.sync,
            migrations: this.connectionConfigurator.migrations,
            entities: this.connectionConfigurator.entities,
            subscribers: this.connectionConfigurator.subscribers,
            cli: this.connectionConfigurator.cli
        });

        return await connection;
    }

    public DestroyConnection(): boolean {
        return false;
    }
}