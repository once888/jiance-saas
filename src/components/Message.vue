<template>
  <v-snackbar v-model="message.visible" location="top" color="#fff" timeout="3000">
    <template v-slot:default>
      <v-icon
        :icon="colorMap[message.type]"
        :color="message.type"
        @click="message.visible = false"
      />
      <span style="color: #000;margin-left: 10px;">{{ message.text }}</span>
    </template>
    <template v-slot:actions>
      <v-icon
        style="font-size: 16px;"
        icon="mdi-close"
        color="black"
        @click="message.visible = false"
      />
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
interface MsgControl {
  type: 'success' | 'warning' | 'error';
  message: string;
}

type msgFn = ({ type, message: msg }: MsgControl) => void;

const colorMap = {
  success: 'mdi-check-circle-outline',
  warning: 'mdi-alert-circle-outline',
  error: 'mdi-close-circle-outline'
};
const message = reactive({
  type: 'success',
  visible: false,
  text: ''
});

const showMsg: msgFn = ({ type = 'success', message: msg = '' }) => {
  const setMessage = () => {
    message.visible = true;
    message.type = type;
    message.text = msg;
  };
  if (message.visible) {
    message.visible = false;
    setTimeout(() => {
      setMessage();
    }, 100);
    return
  }
  setMessage();
};

defineExpose({
  showMsg
});
</script>

<style lang="scss" scoped>
:deep(.v-overlay__content) {
  top: 9px !important;
}
</style>
