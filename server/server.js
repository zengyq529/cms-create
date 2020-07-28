const express = require('express')
const app = express()
// const localStorage = require('localstorage')
// 弱化服务端逻辑 只做保存数据用。
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const sqlite = require('./DB/sqlite') //初始化数据库
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data/formcreate.db');

function getList(type, req, res) {
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize || 20;
    delete req.query.page;
    delete req.query.pageSize;
    let whereList = [], where = '';
    for (key in req.query) {
        if (req.query[key]) whereList.push(`${key} like '%${req.query[key]}%'`)
    }
    if (whereList.length) {
        where = "where " + whereList.join(' and ');
    }
    db.all(`SELECT * FROM ${type} ${where} ORDER BY id LIMIT ${(page - 1) * pageSize}, ${pageSize}; `, function (err, rows) {
        let returndata = rows || []
        db.all(`SELECT count(id) FROM ${type}  ${where}`, function (err, rows) {
            res.send({ errCode: 0, data: { list: returndata, total: rows && rows[0]['count(id)'] || 0 } })
        })
    });
}

function insert(type, req, res) {
    var id = new Date() - 0 + '';
    var keys = Object.keys(req.body);
    var values = Object.values(req.body);
    db.all(`insert into ${type}(id, ${keys.join(',')}) values('${id}', '${values.join("', '")}'); `, function (err, rows) {
        res.send({ errCode: 0, data: id })
    });
}

/**
 * 多条以逗号分隔
 * @param {*} type 
 * @param {*} req 
 * @param {*} res 
 */
function del(type, req, res) {
    var id = req.body.id
    db.all(`delete from ${type} where id in (${id});`, function (err, rows) {
        res.send({ errCode: 0, data: true })
    });
}

function detail(type, req, res) {
    var id = req.query.id
    db.all(`SELECT * FROM ${type} where id=${id};`, function (err, rows) {
        res.send({ errCode: 0, data: rows[0] })
    });
}

function update(type, req, res) {
    var id = req.body.id
    delete req.body.id
    var setList = []
    for (var key in req.body) {
        setList.push(`${key}='${req.body[key]}'`)
    }
    db.all(`update  ${type} set ${setList.join(',')} where id = '${id}'; `, function (err, rows) {
        res.send({ errCode: 0, data: id })
    });
}

app.get('/module/list', function (req, res, next) {
    getList('module', req, res)
})
app.post('/module/insert', function (req, res) { //字段 客户端js来定。
    insert('module', req, res)
})
app.post('/module/delete', function (req, res) {
    del('module', req, res)
})
app.post('/module/update', function (req, res) {
    update('module', req, res)
})
app.get('/module/detail', function (req, res) {
    detail('module', req, res)
})

app.get('/component/list', function (req, res, next) {
    getList('component', req, res)
})
app.post('/component/insert', function (req, res) { //字段 客户端js来定。
    insert('component', req, res)
})
app.post('/component/delete', function (req, res) {
    del('component', req, res)
})
app.post('/component/update', function (req, res) {
    update('component', req, res)
})
app.get('/component/detail', function (req, res) {
    detail('component', req, res)
})
 
app.listen(3000, () => console.log('server listening on port 3000!'))