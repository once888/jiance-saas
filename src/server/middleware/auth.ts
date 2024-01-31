/**
 * 1. 获取 token
 * 2. 验证 token
 * 3. 验证权限
 * 4. 验证用户状态
 * 
 */
    // @ts-ignore
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  // 获取 token
  let token = event.headers.get('Authorization')
  if(token){
    // 处理 token
    token = token.replace('Bearer ','')
    // secret 密钥
    let secret = 'exersgfgr4'
    try {
      // 验证 token
      var decoded = jwt.verify(token, secret)
      console.log("====>decoded: ",decoded)
      // 传递上下文
      event.context.auth = {uid: decoded.data.uid}
    } catch (error) {
      console.log('jwt 解码错误',error)
    }
  }
})
