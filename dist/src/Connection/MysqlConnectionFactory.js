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
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
class MysqlConnectionFactory {
    constructor(connectionConfigurator) {
        this.connectionConfigurator = connectionConfigurator;
        connectionConfigurator = connectionConfigurator;
    }
    CreateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            typeorm_1.useContainer(typedi_1.Container);
            const connection = typeorm_1.getConnectionManager().create({
                type: "mysql",
                name: this.connectionConfigurator.connName,
                host: this.connectionConfigurator.host,
                port: this.connectionConfigurator.port,
                username: this.connectionConfigurator.user,
                password: this.connectionConfigurator.pass,
                database: this.connectionConfigurator.db,
                logging: this.connectionConfigurator.log,
                synchronize: this.connectionConfigurator.sync,
                migrations: this.connectionConfigurator.migrations,
                entities: this.connectionConfigurator.entities,
                subscribers: this.connectionConfigurator.subscribers,
                cli: this.connectionConfigurator.cli
            });
            return connection;
        });
    }
    DestroyConnection() {
        return false;
    }
}
exports.MysqlConnectionFactory = MysqlConnectionFactory;
//# sourceMappingURL=MysqlConnectionFactory.js.map