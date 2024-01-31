/**
 * 1, 判断用户是否登录（无须判断，直接查询所有文章）
 * 2, 已经登录了就查询所有文章，带分页
 *
 */

import { getDB } from '~/server/utils/db/mysql';
import { getLoginUid, responseJson } from '../../utils/helper';


export default defineEventHandler(async (event) => {
  // 判断是否登录
  // let uid = getLoginUid(event)
  // if (uid === 0) {
  //   // @ts-ignore
  //   setResponseStatus(event, 401)
  //   return responseJson(1, '请先登录', {})
  // }

  const body = await getQuery(event);

  const conn = getDB();
  try {
    // 查询文章带分页
    //const sql = "SELECT * FROM `blog_article` WHERE `uid` = ? ORDER BY `id` DESC LIMIT ? OFFSET ?"
    const sql = 'SELECT * FROM `blog_article` ORDER BY `id` DESC LIMIT ? OFFSET ?';
    //@ts-ignore
    const [result] = await conn.query(sql, [Number(body.pageSize), (body.page - 1) * body.pageSize]);
    const [total] = await conn.query('SELECT COUNT(*) FROM blog_article');
    const [res] = Object.values(Object.values(total)[0]);
    await conn.end();
    return responseJson(0, res + '', result);
  } catch (error) {
    await conn.end();
    //@ts-ignore
    setResponseStatus(event, 500);
    return responseJson(1, '查询失败', {});
  }
});
