import * as express from 'express'
var router = express.Router();

import userService from '../service/service.user'

router.get('/getUser',async function(req, res, next) {
    const result = await userService.getUser()
    res.send(result)


});
export default router;