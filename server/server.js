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


app.get('/module/list', function (req, res, next) {
    var moduleName = req.query.moduleName
    var sql =moduleName?( "where  moduleName like '%" + moduleName + "%'"):"";
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize || 20;
    db.all("SELECT * FROM module " + sql + "  ORDER BY id LIMIT " + (page - 1) * pageSize + ", " + page * pageSize + ";", function (err, rows) {
        let returndata = rows || []
        db.all("SELECT count(id) FROM module " + where,function(err,rows){
            res.send({  errCode: 0, data: { list: returndata, total: rows[0]['count(id)'] } })
        })
    });
})
app.post('/module/insert', function (req, res) { //字段 客户端js来定。
    var id = new Date() - 0 + '';
    var keys = Object.keys(req.body);
    var values = Object.values(req.body);
    db.all(`insert into module (id,${keys.join(',')}) values('${id}', '${values.join("','")}');`, function (err, rows) {
        res.send({  errCode: 0, data: id })
    });
})
app.post('/module/delete', function (req, res) {
    var id = req.body.id
    db.all("delete from module where id=" + id + ";", function (err, rows) {
        res.send({errCode: 0, data: true })
    });
})
app.post('/module/update', function (req, res) {
    var id = req.body.id
    delete req.body.id
    var setList = []
    for(var key in req.body){
        setList.push(`${key}='${res.body[key]}'` )
    }
    db.all(`update  module set ${setList.join(',')}  where id = '${id}'; `, function (err, rows) {
        res.send({ errCode: 0, data: id })
    });
})
app.get('/module/detail', function (req, res) {
    var id = req.query.id
    db.all("SELECT * FROM module where id=" + id + ";", function (err, rows) {
        res.send({ errCode: 0, data: rows })
    });
})




app.get('/component/list', function (req, res, next) {
    var componentName = req.query.componentName
    var where = ''
    if(componentName){
        where = componentName ?("where  componentName like '%" + componentName + "%'") :'';
    }
   
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize || 20;
    db.all("SELECT * FROM component " + where + "  ORDER BY id LIMIT " + (page - 1) * pageSize + ", " + page * pageSize + ";", function (err, rows) {
        let returndata = rows || []
        db.all("SELECT count(id) FROM component " + where,function(err,rows){
            res.send({  errCode: 0, data: { list: returndata, total: rows[0]['count(id)'] } })
        })
        
    });
})
app.post('/component/insert', function (req, res) { //字段 客户端js来定。
    var id = new Date() - 0 + '';
    var keys = Object.keys(req.body);
    var values = Object.values(req.body);
    db.all(`insert into component (id,${keys.join(',')}) values('${id}', '${values.join("','")}');`, function (err, rows) {
        res.send({  errCode: 0, data: id })
    });
})
app.post('/component/delete', function (req, res) {
    var id = req.body.id
    db.all("delete from component where id=" + id + ";", function (err, rows) {
        res.send({errCode: 0, data: true })
    });
})
app.post('/component/update', function (req, res) {
    var id = req.body.id
    delete req.body.id
    var setList = []
    for(var key in req.body){
        setList.push(`${key}='${res.body[key]}'` )
    }
    db.all(`update  component set ${setList.join(',')}  where id = '${id}'; `, function (err, rows) {
        res.send({ errCode: 0, data: id })
    });
})
app.get('/component/detail', function (req, res) {
    var id = req.query.id
    db.all("SELECT * FROM component where id=" + id + ";", function (err, rows) {
        res.send({ errCode: 0, data: rows })
    });
})
 



app.listen(3000, () => console.log('Example app listening on port 3000!'))