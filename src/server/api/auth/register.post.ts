import Joi from "joi";
// @ts-ignore
import md5 from "md5";
import { getDB } from '~/server/utils/db/mysql';
import { responseJson } from "../../utils/helper";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)

  // 校验数据 joi
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
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

  // 密码加密
  let salt = 'fu32sdg';
  let password = md5(md5(body.password) + salt)
  const conn = getDB()
  try {
    //  查询数据库
    const [rows] = await conn.execute("select * from `blog_user` where `name` = ?", [body.name])
    console.log('2222', rows)
    // @ts-ignore
    if (rows.length > 0) {
      return responseJson(1, '用户名已存在', {})
    }

    // 创建账号
    const [rows2] = await conn.execute("insert into `blog_user` (`name`, `password`,`salt`,`create_time`) value (?,?,?,now())", [body.name, password, salt])
    console.log('3333', rows2)
    // 释放连接
    await conn.end()
    // @ts-ignore
    if (rows2.affectedRows === 1) {
      return responseJson(0, '注册成功', {})
    }
  } catch (error) {
    // 释放连接
    await conn.end()
    return responseJson(1, '注册失败', {})
  }
  return {}
})
