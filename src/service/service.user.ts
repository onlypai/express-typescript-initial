import connection from '../app/database'
class Userservice{
    async getUser(){
        const statement = `SELECT * FROM users`
        //connection.peomise()在database里面已经导出,所以这里可以直接使用connection.execute
        const result = await connection.execute(statement)
        return result[0]
    }
}
export default new Userservice()