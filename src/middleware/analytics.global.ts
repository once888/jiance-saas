export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('accessToken');
  if (to.fullPath === '/manage' && !token.value) {
    return navigateTo('/nuxtLogin'); // 重定向 (generate打包丢失manage)
  }
  // if (to.fullPath === '/login') {
  //   return abortNavigation(); // 停止当前导航
  // }
  // if (to.fullPath === '/comePay/comePay') {
  //   return abortNavigation('禁止进入页面'); // 拒绝当前导航并出现错误
  // }
});

