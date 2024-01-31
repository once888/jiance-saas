import {getDB} from '~/server/utils/db/mysql';
export default defineEventHandler(async () => {
  const [rows, fields] = await getDB().query('SELECT * FROM blog_user')
  console.log('users',rows)
})