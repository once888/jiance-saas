/**
 * 1, 判断用户是否登录
 * 2, 已经登录了就创建文章
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
    name: Joi.string().required(),
    detail: Joi.string().required(),
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

    // 创建文章
    const [rows2] = await conn.execute("insert into `blog_article` (`name`, `detail`,`uid`,`create_time`) value (?,?,?,now())", [body.name, body.detail, uid])
    console.log('3333', rows2)
    // 释放连接
    await conn.end()
    // @ts-ignore
    if (rows2.affectedRows === 1) {
      return responseJson(0, '创建文章成功', {})
    }
    return responseJson(1, '创建文章失败', {})
  } catch (error) {
    // 释放连接
    await conn.end()
    // @ts-ignore
    setResponseStatus(event, 500)
    return responseJson(1, '创建文章失败'+ error, {})
  }

})