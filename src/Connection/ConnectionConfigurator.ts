
export class ConnectionConfigurator {

    private _port: number;
    private _sync: boolean;
    private _log: boolean;
    private _connName: string;
    private _user: string;
    private _pass: string;
    private _migrations: Array<string>;
    private _entities: Array<string>;
    private _subscribers: Array<string>;
    private _cli: Object;

    constructor(readonly host:string, readonly db: string) {
        host = host;
        db = db;
    }

    get port(): number {
        return this._port;
    }

    setPort(value: number): ConnectionConfigurator  {
        this._port = value;
        return this;
    }

    get sync(): boolean {
        return this._sync;
    }

    setSync(value: boolean): ConnectionConfigurator  {
        this._sync = value;
        return this;
    }

    get log(): boolean {
        return this._log;
    }

    setLog(value: boolean): ConnectionConfigurator  {
        this._log = value;
        return this;
    }

    get connName(): string {
        return this._connName;
    }

    setConnName(value: string): ConnectionConfigurator  {
        this._connName = value;
        return this;
    }

    get user(): string {
        return this._user;
    }

    setUser(value: string): ConnectionConfigurator  {
        this._user = value;
        return this;
    }

    get pass(): string {
        return this._pass;
    }

    setPass(value: string): ConnectionConfigurator {
        this._pass = value;
        return this;
    }

    get migrations(): Array<string> {
        return this._migrations;
    }

    setMigrations(value: Array<string>): ConnectionConfigurator {
        this._migrations = value;
        return this;
    }

    get entities(): Array<string> {
        return this._entities;
    }

    setEntities(value: Array<string>): ConnectionConfigurator {
        this._entities = value;
        return this;
    }

    get subscribers(): Array<string> {
        return this._subscribers;
    }

    setSubscribers(value: Array<string>): ConnectionConfigurator {
        this._subscribers = value;
        return this;
    }

    get cli(): Object {
        return this._cli;
    }

    setCli(value: Object): ConnectionConfigurator  {
        this._cli = value;
        return this;
    }
}