import { Connection, ConnectionManager } from 'typeorm';
import { IConnectionFactory } from './IConnectionFactory';

export class MysqlConnectionFactory implements IConnectionFactory {
    
    private host: string;
    private db: string;
    private user: string;
    private pass: string;
    private name: string;
    private port: number;
    private shouldLog: boolean;
    private shouldSync: boolean;
    private connectionManager : ConnectionManager;
    
    
    constructor(host: string, db: string, user: string = null, pass: string = null,
         port:number = 3306, shouldSync: boolean = true, shouldLog: boolean = true, name: string = "default") {
        this.connectionManager = new ConnectionManager();
        this.host = host;
        this.db = db;
        this.user = user;
        this.pass = pass;
        this.port = port;
        this.name = name;
        this.shouldLog = shouldLog;
        this.shouldSync = shouldSync;
    }

    public async CreateConnection(): Promise<Connection> {

        const connection : Connection = this.connectionManager.create({
            type: "mysql",
            name: this.name,
            host: this.host,
            port: this.port,
            username: this.user,
            password: this.pass,
            database: this.db,
        });

        return await connection.connect();
    }

    public DestroyConnection(): boolean {
        return false;
    }
}