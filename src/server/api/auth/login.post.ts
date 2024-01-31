import Joi from "joi";
import md5 from "md5";
import { getDB } from '~/server/utils/db/mysql';
import { responseJson } from "../../utils/helper";
import jwt from "jsonwebtoken";

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
    const [rows] = await conn.execute("SELECT * FROM `blog_user` WHERE `name` = ? AND `password`=?", [body.name, password])
    console.log('userinfo', rows)
    // @ts-ignore
    if (rows.length === 0) {
      return responseJson(1, '账号不存在', {})
    }


    // 释放连接
    await conn.end()
    // 生成 token jsonwebtoken
    // secret 密钥
    let secret = 'exersgfgr4'
    let token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),

      data: {
        // @ts-ignore
        uid: rows[0].id,
        // @ts-ignore
        name: rows[0].name
      }
    }, secret);

    // 返回数据
    return responseJson(0, '登录成功', {
      accessToken: token,
      userInfo: {
        // @ts-ignore
        name: rows[0].name
      }
    })
  } catch (error) {
    // 释放连接
    await conn.end()
    return responseJson(1, '注册失败', {})
  }
})
