/**
 * 1, 判断用户是否登录
 * 2, 已经登录了就删除文章
 * 
 */

import Joi from "joi";
import { getDB } from '~/server/utils/db/mysql';
import { getLoginUid, responseJson } from "../../utils/helper";


export default defineEventHandler(async (event) => {
  // 判断是否登录
  let uid = getLoginUid(event)
  if (uid === 0) {
    // @ts-ignore
    setResponseStatus(event, 401)
    return responseJson(1, '请先登录', {})
  }

  const body = await readBody(event)
  console.log(body)

  // 校验数据 joi
  const schema = Joi.object({
    id: Joi.number().required(),
    uid: Joi.number().required(),
    name: Joi.string().required()
  });
  try {
    const value = await schema.validateAsync(body);
  }
  catch (err) {
    return {
      code: 1,
      message: '参数错误',
      data: {}
    }
  }

  const conn = getDB()
  try {

    // 删除文章
    const sql = `delete from blog_article where id=${body.id} and uid = ${uid} and name = '${body.name}'`
    const result = await conn.query(sql)
    await conn.end()
    // 结果返回给前端
    // @ts-ignore
    if (result.affectedRows === 0) {
      return responseJson(1, '删除失败', {})
    } else {
      return responseJson(0, '删除成功', {})
    }

  } catch (err) {
    await conn.end()
    // @ts-ignore
    setResponseStatus(event, 500)
    return responseJson(1, '删除失败'+err, {})
  }
})