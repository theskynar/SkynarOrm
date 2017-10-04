"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConnectionConfigurator {
    constructor(host, db, name = 'default', user = null, pass = null, shouldLog = true, shouldSync = true, port = null) {
        this.host = host;
        this.db = db;
        this.name = name;
        this.user = user;
        this.pass = pass;
        this.shouldLog = shouldLog;
        this.shouldSync = shouldSync;
        this.port = port;
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
exports.ConnectionConfigurator = ConnectionConfigurator;
//# sourceMappingURL=ConnectionConfigurator.js.map