import { SubmitEventPromise } from 'vuetify';
import camelCase from 'lodash/camelCase';
import cloneDeep from 'lodash/cloneDeep';
import { listDelLast } from '~/utils/tools';
import { MethodOptions } from '~/utils/types';
import { useOptionsStore } from '~/store';

interface FetchProps {
  page?: number;
  itemsPerPage?: number;
  sortBy?: any[];
}
interface BodyProps {
  id?: null | number;
  uid?: null | number;
  name: string;
  detail: string;
}

export const useManageSetup = () => {
  const { loading, loadingBtn, setLoadingBtn, setLoading } = useLoading(false);
  const store = useOptionsStore();
  const messageRef = computed(() => store.options.messageRef);
  const rules = {
    title: [
      (value: string) => {
        if (value) return true
        return '标题不能为空';
      }
    ]
  };
  const itemsPerPageOptions = [
    { value: 20, title: '20' },
    { value: 50, title: '50' },
    { value: 100, title: '100' }
  ];
  const headers = [
    { title: '序号', key: 'index', align: 'center', sortable: false },
    { title: '名称', key: 'name', align: 'center', sortable: false },
    { title: '创建时间', key: 'createTime', align: 'center', sortable: false },
    { title: '操作', key: 'actions', align: 'end', sortable: false }
  ];
  const visible = ref(false);
  const page = ref(1);
  const itemsPerPage = ref(20);
  const totalItems = ref(0);
  const title = ref('添加文章');
  const selected = ref([]);
  const serverItems = ref([]);
  const textFieldRef = ref();
  const messageBoxRef = ref();
  const editorData = reactive({
    id: null,
    uid: null,
    title: '',
    content: ''
  });

  const handleSearch = () => {};
  const loadItems = ({ page: _page, itemsPerPage: _itemsPerPage, sortBy }: FetchProps = { page: page.value, itemsPerPage: itemsPerPage.value }) => {
    setLoading(true);
    useRequest({ url: `/api/blog/book?pageSize=${_itemsPerPage}&page=${_page}` }).then(({ data, message }: any) => {
      serverItems.value = data.map((item: { [key: string]: any }) => {
        for (let key in item) {
          if (key.includes('_')) {
            const _key = camelCase(key);
            item[_key] = cloneDeep(item[key]);
            delete item[key];
          }
        }
        return item;
      });
      totalItems.value = +message || 0;
    }).finally(() => {
      setLoading(false);
    });
  };
  const clearEditor = () => {
    editorData.title = '';
    editorData.content = '';
  };
  const handleAdd = () => {
    clearEditor();
    title.value = '添加文章';
    visible.value = true;
  };
  const editItem = (item: { [key: string]: any }) => {
    editorData.id = item.id;
    editorData.uid = item.uid;
    editorData.title = item.name;
    editorData.content = item.detail;
    title.value = '修改文章';
    visible.value = true;
  };
  const deleteItem = (item: { [key: string]: any }) => {
    messageBoxRef.value.confirm({
      text: '是否确认删除该文章？',
      beforeClose: () => {
        return new Promise(resolve => {
          const { id, uid, name } = item;
          useRequest({
            url: '/api/blog/book',
            method: 'delete',
            body: { id, uid, name }
          }).then(() => {
            messageRef.value.showMsg({ type: 'success', message: '已删除' });
            listDelLast(serverItems.value, page.value);
            loadItems();
          }).finally(() => {
            resolve(true);
          });
        });
      }
    });
  };
  const handleSave = () => {
    (textFieldRef.value.validate() as SubmitEventPromise).then(({ valid }) => {
      if (valid) {
        setLoadingBtn(true);
        const { title: _title, content } = editorData;
        let method: MethodOptions = 'post';
        const body: BodyProps = {
          name: _title,
          detail: content
        };
        if (title.value === '修改文章') {
          method = 'put';
          body.id = editorData.id;
          body.uid = editorData.uid;
        }
        useRequest({ url: '/api/blog/book', method, body }).then((res: any) => {
          messageRef.value.showMsg({ type: 'success', message: res.message });
          loadItems();
          visible.value = false;
        }).finally(() => {
          setLoadingBtn(false);
        });
      }
    });
  };

  return {
    rules,
    loading,
    itemsPerPage,
    headers,
    serverItems,
    totalItems,
    selected,
    visible,
    loadingBtn,
    title,
    editorData,
    textFieldRef,
    messageBoxRef,
    itemsPerPageOptions,
    page,
    handleAdd,
    handleSearch,
    loadItems,
    editItem,
    deleteItem,
    handleSave
  };
};
