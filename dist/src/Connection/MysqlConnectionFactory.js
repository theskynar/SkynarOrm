"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class MysqlConnectionFactory {
    constructor(host, db, user = null, pass = null, port = 3306, shouldSync = true, shouldLog = true, name = "default") {
        this.connectionManager = new typeorm_1.ConnectionManager();
        this.host = host;
        this.db = db;
        this.user = user;
        this.pass = pass;
        this.port = port;
        this.name = name;
        this.shouldLog = shouldLog;
        this.shouldSync = shouldSync;
    }
    CreateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.connectionManager.create({
                type: "mysql",
                name: this.name,
                host: this.host,
                port: this.port,
                username: this.user,
                password: this.pass,
                database: this.db,
            });
            return yield connection.connect();
        });
    }
    DestroyConnection() {
        return false;
    }
}
exports.MysqlConnectionFactory = MysqlConnectionFactory;
//# sourceMappingURL=MysqlConnectionFactory.js.map