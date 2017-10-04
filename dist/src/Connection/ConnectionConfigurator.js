"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConnectionConfigurator {
    constructor(host, db) {
        this.host = host;
        this.db = db;
        host = host;
        db = db;
    }
    get port() {
        return this._port;
    }
    setPort(value) {
        this._port = value;
        return this;
    }
    get sync() {
        return this._sync;
    }
    setSync(value) {
        this._sync = value;
        return this;
    }
    get log() {
        return this._log;
    }
    setLog(value) {
        this._log = value;
        return this;
    }
    get connName() {
        return this._connName;
    }
    setConnName(value) {
        this._connName = value;
        return this;
    }
    get user() {
        return this._user;
    }
    setUser(value) {
        this._user = value;
        return this;
    }
    get pass() {
        return this._pass;
    }
    setPass(value) {
        this._pass = value;
        return this;
    }
    get migrations() {
        return this._migrations;
    }
    setMigrations(value) {
        this._migrations = value;
        return this;
    }
    get entities() {
        return this._entities;
    }
    setEntities(value) {
        this._entities = value;
        return this;
    }
    get subscribers() {
        return this._subscribers;
    }
    setSubscribers(value) {
        this._subscribers = value;
        return this;
    }
    get cli() {
        return this._cli;
    }
    setCli(value) {
        this._cli = value;
        return this;
    }
}
exports.ConnectionConfigurator = ConnectionConfigurator;
//# sourceMappingURL=ConnectionConfigurator.js.map