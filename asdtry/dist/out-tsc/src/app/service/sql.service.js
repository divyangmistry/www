"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var DB_NAME = '__lifecheck';
var win = window;
var Sql = /** @class */ (function () {
    function Sql(platform) {
        var _this = this;
        this.platform = platform;
        this._dbPromise = new Promise(function (resolve, reject) {
            try {
                var _db_1;
                _this.platform.ready().then(function () {
                    if (_this.platform.is('cordova') && win.sqlitePlugin) {
                        _db_1 = win.sqlitePlugin.openDatabase({
                            name: DB_NAME,
                            location: 'default'
                        });
                    }
                    else {
                        console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
                        _db_1 = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
                    }
                    resolve(_db_1);
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
        this._tryInit();
        // this.platform.ready().then(() => {
        //    if (this.platform.is('cordova') && win.sqlitePlugin) {
        //      this._db = win.sqlitePlugin.openDatabase({
        //        name: DB_NAME,
        //        location: 2,
        //        createFromLocation: 0
        //      });
        //      console.log(this._db);
        //    } else {
        //      console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
        //      this._db = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
        //    }
        //    this._tryInit();
        //  })
    }
    // Initialize the DB with our required tables
    Sql.prototype._tryInit = function () {
        this.query('CREATE TABLE IF NOT EXISTS lifecheck (key text primary key, value text)').catch(function (err) {
            console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
        });
    };
    /**
     * Perform an arbitrary SQL operation on the database. Use this method
     * to have full control over the underlying database through SQL operations
     * like SELECT, INSERT, and UPDATE.
     *
     * @param {string} query the query to run
     * @param {array} params the additional params to use for query placeholders
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.query = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this._dbPromise.then(function (db) {
                    db.transaction(function (tx) {
                        tx.executeSql(query, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                    }, function (err) { return reject({ err: err }); });
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    /**
     * Get the value in the database identified by the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.get = function (key) {
        return this.query('select key, value from lifecheck where key = ? limit 1', [key]).then(function (data) {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    };
    /**
     * Set the value in the database for the given key. Existing values will be overwritten.
     * @param {string} key the key
     * @param {string} value The value (as a string)
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.set = function (key, value) {
        return this.query('insert or replace into lifecheck(key, value) values (?, ?)', [key, value]);
    };
    /**
     * Remove the value in the database for the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.remove = function (key) {
        return this.query('delete from lifecheck where key = ?', [key]);
    };
    /**
     * Clear all keys/values of your database.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.clear = function () {
        return this.query('delete from lifecheck');
    };
    Sql = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_1.Platform])
    ], Sql);
    return Sql;
}());
exports.Sql = Sql;
//# sourceMappingURL=sql.service.js.map