export default defineEventHandler(event => {
  const query = getQuery(event);
  console.log('query', query);
  return 'ok';
});
