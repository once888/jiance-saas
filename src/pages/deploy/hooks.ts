import bIcon1 from '../../assets/images/b-icon1.png';
import bIcon2 from '../../assets/images/b-icon2.png';
import bIcon3 from '../../assets/images/b-icon3.png';
import bIcon4 from '../../assets/images/b-icon4.png';
import dIcon1 from '../../assets/images/d-icon1.png'
import dIcon2 from '../../assets/images/d-icon2.png'
import dIcon3 from '../../assets/images/d-icon3.png'
import { SubmitEventPromise } from 'vuetify';
import { useOptionsStore } from '~/store';

export const useDeploySetup = () => {
  const { loadingBtn, setLoadingBtn } = useLoading(false);
  const store = useOptionsStore();
  const messageRef = computed(() => store.options.messageRef);
  const rules = {
    phone: (value: string) => {
      if (/^1[3456789]\d{9}$/.test(value)) return true
      return '请输入正确的手机号码';
    }
  };
  const formRules = {
    name: [
      (value: string) => {
        if (value) return true
        return '姓名不能为空';
      }
    ],
    phone: [
      (value: string) => {
        if (/^1[3456789]\d{9}$/.test(value)) return true
        return '请输入正确的手机号码';
      }
    ],
    company: [
      (value: string) => {
        if (value) return true
        return '企业名称不能为空';
      }
    ],
    num: [
      (value: string) => {
        if (value) return true
        return '使用人数不能为空';
      }
    ]
  };
  const visiblePhone = ref(false);
  const form = reactive({
    name: '',
    phone: '',
    company: '',
    num: ''
  });
  const formPhone = reactive({
    phone: ''
  });
  const infoListB = [
    { icon: bIcon1, title: '全流程录入' },
    { icon: bIcon2, title: '字段配置全' },
    { icon: bIcon3, title: '部署速度快' },
    { icon: bIcon4, title: '安全系数高' }
  ];
  const infoListD = [
    { icon: dIcon1, title: '数据安全有保证', text: '数据私有化与公有云隔离不用担心数据泄露。' },
    { icon: dIcon2, title: '企业版免费试用', text: '为了帮助你更好的试用，我们可为你免费开通试用' },
    { icon: dIcon3, title: '私有化部署万元起售', text: '立即在线咨询，马上为你对接客服' }
  ];
  const formRef = ref();

  const handleSubmit = (val: SubmitEventPromise) => {
    val.then(({ valid }) => {
      if (valid) {
        setLoadingBtn(true);
        useRequest({
          url: '/saasApi/api/testing/mobile/addReadyMobile',
          method: 'post',
          body: {
            name: form.name,
            mobile: form.phone,
            companyName: form.company,
            number: form.num
          },
          server: false
        }).then(() => {
          messageRef.value.showMsg({ type: 'success', message: '已添加' });
        }).finally(() => {
          setLoadingBtn(false);
        });
      }
    });
  };
  const handlePhone = () => {
    formPhone.phone = '';
    visiblePhone.value = true;
  };
  const handlePhoneConfirm = () => {
    formRef.value.validate().then(({ valid }: { valid: boolean; }) => {
      if (valid) {
        setLoadingBtn(true);
        useRequest({
          url: '/saasApi/api/testing/mobile/addReadyMobile',
          method: 'post',
          body: {
            mobile: formPhone.phone
          },
          server: false
        }).then(() => {
          messageRef.value.showMsg({ type: 'success', message: '已添加联系电话' });
          visiblePhone.value = false;
        }).finally(() => {
          setLoadingBtn(false);
        });
      }
    });
  };
  return {
    loadingBtn,
    visiblePhone,
    formRules,
    form,
    infoListB,
    infoListD,
    formPhone,
    rules,
    formRef,
    handleSubmit,
    handlePhone,
    handlePhoneConfirm
  };
};
