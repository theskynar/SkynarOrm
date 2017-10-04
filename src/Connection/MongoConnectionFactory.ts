import { Connection, ConnectionManager } from 'typeorm';
import { IConnectionFactory } from './IConnectionFactory';

export class MongoConnectionFactory implements IConnectionFactory {
    
    private host: string;
    private db: string;
    private user: string;
    private pass: string;
    private shouldLog: boolean;
    private shouldSync: boolean;
    private connectionManager : ConnectionManager;
    
    constructor(host: string, db: string, user: string = null, pass: string = null, shouldSync: boolean = true, shouldLog: boolean = true) {
        this.connectionManager = new ConnectionManager();
        this.host = host;
        this.db = db;
        this.user = user;
        this.pass = pass;
        this.shouldLog = shouldLog;
        this.shouldSync = shouldSync;
    }

    public async CreateConnection(): Promise<Connection> {

        const connection : Connection = this.connectionManager.create({
            type: "mongodb",
            host: this.host,
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