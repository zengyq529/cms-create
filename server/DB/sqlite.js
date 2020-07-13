// used:
const HandleDB = require('./table.js')
let db = new HandleDB({
    databaseFile: './data/formcreate.db',
    tableName: 'ads'
});

var sqlCreate = [{
    databaseFile: './data/formcreate.db',
    tableName: 'module',
    field:`id varchar(13),
        props text,
        moduleDesc varchar(50),
        moduleName varchar(30),
        source text,
        style text,
        event text,
        components text`
},{
    databaseFile: './data/formcreate.db',
    tableName: 'component',
    field:`id varchar(13),
        props text,
        componentDesc varchar(50),
        componentName varchar(30),
        type varchar(30),
        source text,
        style text,
        slot varchar(30),
        slotHtml varchar(100),
        event text,
        hasChildren tinyint,
        components text`
}]

db.connectDataBase().then((result)=>{
    console.log('connect')
    // 创建表(如果不存在的话,则创建,存在的话, 不会创建的,但是还是会执行回调)
    for (let i = 0; i < sqlCreate.length; i++) {
        let sentence = `create table if not exists ${sqlCreate[i].tableName}( ${sqlCreate[i].field});`;
        db.createTable(sentence);
    }
}).catch((err)=>{
    console.error(err);
});
 