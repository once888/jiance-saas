import { UseFetchOptions } from '#app';
import { MethodOptions } from '~/utils/types';
import { useOptionsStore } from '~/store';

interface RequestProps {
  url: string;
  body?: { [key: string]: any };
  method?: MethodOptions;
  server?: boolean;
}

export default function<DataT>({ url = '', body = {}, method = 'get', server = true }: RequestProps) {
  const token = useCookie('accessToken');
  const store = useOptionsStore();
  const messageRef = computed(() => store.options.messageRef);
  const nonuse = ['/api/auth/login'];
  return new Promise((resolve, reject) => {
    const options: UseFetchOptions<DataT> = {
      method,
      server,
      onRequest({ options }) {
        // 设置请求头
        options.headers = options.headers || {};
        if (!nonuse.includes(url)) {
          const reqHeaders = new Headers(options.headers);
          reqHeaders.set('Authorization', `Bearer ${token.value}`);
          options.headers = reqHeaders;
        }
      }
    };
    if (method !== 'get') options.body = body;
    useFetch(url, options).then(({ data, error }: any) => {
      if (error.value) {
        const message = error.value.data?.message || error.value.message;
        messageRef.value.showMsg({ type: 'error', message });
        reject(message);
      } else if (data.value?.code && data.value?.code !== 200) {
        const { message } = data.value;
        messageRef.value.showMsg({ type: 'error', message });
        reject(message);
      } else {
        resolve(data.value);
      }
    }).catch(err => {
      reject(err);
    });
  });
}
