import { ConnectionConfigurator } from './ConnectionConfigurator';
import { Connection, ConnectionManager } from 'typeorm';
import { IConnectionFactory } from './IConnectionFactory';

export class MongoConnectionFactory implements IConnectionFactory {
    
    private connectionManager : ConnectionManager;
    
    constructor(private connectionConfigurator: ConnectionConfigurator) {
        this.connectionManager = new ConnectionManager();
        connectionConfigurator = connectionConfigurator;
    }

    public async CreateConnection(): Promise<Connection> {

        const connection : Connection = this.connectionManager.create({
            type: "mongodb",
            host: this.connectionConfigurator.host,
            username: this.connectionConfigurator.user,
            password: this.connectionConfigurator.pass,
            database: this.connectionConfigurator.db,
        });

        return await connection.connect();
    }

    public DestroyConnection(): boolean {
        return false;
    }
}