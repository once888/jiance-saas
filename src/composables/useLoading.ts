export default function(initValue = false) {
  const loading = ref(initValue);
  const loadingBtn = ref(initValue);

  const setLoading = (value: boolean) => {
    loading.value = value;
  };
  const setLoadingBtn = (value: boolean) => {
    loadingBtn.value = value;
  };

  return {
    loading,
    loadingBtn,
    setLoading,
    setLoadingBtn
  };
}
