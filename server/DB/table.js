var SQLite3 = require('sqlite3').verbose();
class HandleDB {
    constructor(options) {
        this.databaseFile = options && options.databaseFile || `./data/formcreate.db`;    // 数据库文件(文件路径+文件名)
        this.tableName = options && options.tableName || `adsTable`;   // 表名

        this.db = null;    // 打开的数据库对象
    }
    connectDataBase() {
        let _self = this;
        return new Promise((resolve, reject) => {
            _self.db = new SQLite3.Database(_self.databaseFile, function(err) {
                if (err) reject(new Error(err));
                resolve('success');
            });
        });
    }
    createTable(sentence) {
        let _self = this;
        return new Promise((resolve, reject) => {
            _self.db.exec(sentence, function(err) {
                if (err) reject(new Error(err));
                resolve(`success`);
            });
        });
    }

    /**
     * 执行 增  删  改  查(单个数据查询或者多个数据查询)
     * @param sql    sql语句
     * @param param     参数(可以是数组或者数字或者字符串,根据sql语句来定)
     * @param mode    执行模式, 默认run,执行sql,如果查询的话,则使用get(单个)all(多个)
     * @returns {Promise}
       @used
       增 : this.sql(`insert into ${this.tableName} (begin_time, create_time, end_time, play_id, postion_id, status, task_id) values(?, ?, ?, ?, ?, ?, ?)`,
                    [obj.begin_time, obj.create_time, obj.end_time, obj.play_id, obj.postion_id, obj.status, obj.task_id]);

       删 : this.sql(`delete from ${this.tableName} where id = ?`, id);

       改 : this.sql(`update ${this.tableName} set begin_time = ?, status = ? where postion_id = ?`, [begin_timeValue, statusValue, postion_idValue]);

       查 : this.sql(`select * from ${this.tableName} where id = ?`, id, 'get/all');
     */
    sql(sql, param, mode) {
        let _self = this;
        mode = mode == 'all' ? 'all' : mode == 'get' ? 'get' : 'run';
        return new Promise((resolve, reject) => {
            _self.db[mode](sql, param,
                function (err, data) {    // data: Array, Object
                    if (err) {
                        reject(new Error(err));
                    } else {
                        if (data) {
                            resolve(data);    // 返回数据查询成功的结果
                        } else {
                            resolve('success');    // 提示 增 删 改 操作成功
                        };
                    };
                }
            );
        });
    }
};

module.exports = HandleDB;