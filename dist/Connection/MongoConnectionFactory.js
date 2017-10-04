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
class MongoConnectionFactory {
    constructor(host, db, user = null, pass = null, shouldSync = true, shouldLog = true) {
        this.connectionManager = new typeorm_1.ConnectionManager();
        this.host = host;
        this.db = db;
        this.user = user;
        this.pass = pass;
        this.shouldLog = shouldLog;
        this.shouldSync = shouldSync;
    }
    CreateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.connectionManager.create({
                type: "mongodb",
                host: this.host,
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
exports.MongoConnectionFactory = MongoConnectionFactory;
//# sourceMappingURL=MongoConnectionFactory.js.map