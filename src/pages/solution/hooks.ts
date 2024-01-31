import camelCase from 'lodash/camelCase';
import cloneDeep from 'lodash/cloneDeep';

export const useSolutionSetup = () => {
  const { loading, setLoading } = useLoading(false);
  const items = ref([]);

  const loadItems = () => {
    setLoading(true);
    useRequest({ url: '/api/blog/book?pageSize=100&page=1' }).then(({ data }: any) => {
      items.value = data.map((item: { [key: string]: any }) => {
        for (let key in item) {
          if (key.includes('_')) {
            const _key = camelCase(key);
            item[_key] = cloneDeep(item[key]);
            delete item[key];
          }
          item.createTime = item.createTime?.slice(0, 10);
        }
        return item;
      });
    }).finally(() => {
      setLoading(false);
    });
  };

  loadItems();


  return {
    loading,
    items
  };
};
