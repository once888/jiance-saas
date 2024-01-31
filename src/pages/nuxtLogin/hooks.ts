import { SubmitEventPromise } from 'vuetify';
import { useOptionsStore } from '~/store';

export const useLoginSetup = () => {
  const { loadingBtn, loading, setLoadingBtn } = useLoading(false);
  const store = useOptionsStore();
  const messageRef = computed(() => store.options.messageRef);

  const rules = {
    username: [
      (value: string) => {
        if (value) return true
        return '用户名不能为空';
      }
    ],
    password: [
      (value: string) => {
        if (value) return true
        return '密码不能为空';
      }
    ]
  };
  const router = useRouter();
  const token = useCookie('accessToken');
  const visible = ref(false);
  const username = ref('');
  const form = reactive({
    username: '',
    password: ''
  });

  const handleSubmit = (val: SubmitEventPromise) => {
    val.then(({ valid }) => {
      if (valid) {
        setLoadingBtn(true);
        const { username, password } = form;
        const body = {
          name: username,
          password
        };
        useRequest({ url: '/api/auth/login', method: 'post', body }).then((res: any) => {
          token.value = res.data.accessToken;
          messageRef.value.showMsg({ type: 'success', message: res.message });
          router.push('/manage');
        }).finally(() => {
          setLoadingBtn(false);
        });
      }
    });
  };

  return {
    username,
    rules,
    form,
    loading,
    loadingBtn,
    visible,
    handleSubmit
  };
};
