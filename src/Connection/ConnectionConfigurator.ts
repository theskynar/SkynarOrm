
export class ConnectionConfigurator {

    constructor(readonly host:string, readonly db: string, readonly name: string = 'default', readonly user: string = null, readonly pass:string = null, readonly shouldLog: boolean = true, readonly shouldSync: boolean = true, readonly port: number = null) {
        host = host;
        db = db;
        user = user;
        pass = pass;
        shouldLog = shouldLog;
        shouldSync = shouldSync;
        name = name;
        port = port;
    }
}