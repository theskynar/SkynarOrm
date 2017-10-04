import { Connection, ConnectionManager } from 'typeorm';
import { IConnectionFactory } from './IConnectionFactory';
import { ConnectionConfigurator } from "./ConnectionConfigurator";

export class MysqlConnectionFactory implements IConnectionFactory {
    
    private connectionManager : ConnectionManager;
    
    constructor(private connectionConfigurator: ConnectionConfigurator) {
        this.connectionManager = new ConnectionManager();
        connectionConfigurator = connectionConfigurator;
    }

    public async CreateConnection(): Promise<Connection> {

        const connection : Connection = this.connectionManager.create({
            type: "mysql",
            name: this.connectionConfigurator.name,
            host: this.connectionConfigurator.host,
            port: this.connectionConfigurator.port,
            username: this.connectionConfigurator.user,
            password: this.connectionConfigurator.pass,
            database: this.connectionConfigurator.db,
        });

        const conn = await connection.connect();
        return await conn;
    }

    public DestroyConnection(): boolean {
        return false;
    }
}