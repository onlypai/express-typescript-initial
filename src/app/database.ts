import mysql from 'mysql2'

const connections = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: '数据库名',
    password: '数据库密码',
    user: 'root'
})

connections.getConnection((err, conn) => {
    conn.connect((err) => {
        if (err) {
            console.log('数据库连接失败：', err);
            return
        }
        console.log('数据库连接成功');
    })
})
export default connections.promise()