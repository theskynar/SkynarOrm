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
    constructor(connectionConfigurator) {
        this.connectionConfigurator = connectionConfigurator;
        this.connectionManager = new typeorm_1.ConnectionManager();
        connectionConfigurator = connectionConfigurator;
    }
    CreateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = this.connectionManager.create({
                type: "mongodb",
                host: this.connectionConfigurator.host,
                username: this.connectionConfigurator.user,
                password: this.connectionConfigurator.pass,
                database: this.connectionConfigurator.db,
                logging: this.connectionConfigurator.log,
                synchronize: this.connectionConfigurator.sync,
            });
            const conn = yield connection.connect();
            return yield conn;
        });
    }
    DestroyConnection() {
        return false;
    }
}
exports.MongoConnectionFactory = MongoConnectionFactory;
//# sourceMappingURL=MongoConnectionFactory.js.map