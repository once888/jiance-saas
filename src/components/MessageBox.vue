<template>
  <v-dialog v-model="visible" width="420">
    <v-card title="提示">
      <v-card-text>
        <v-icon color="orange" icon="mdi-alert-circle" />
        {{ cardText }}
      </v-card-text>
      <v-card-actions>
        <div class="dialog-bottom">
          <v-btn variant="tonal" @click="visible = false">取消</v-btn>
          <v-btn
            class="text-none text-subtitle-1"
            color="blue"
            variant="flat"
            :disabled="disabled"
            :loading="loadingBtn"
            @click="handleConfirm"
          >确认</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
interface ConfirmProps {
  text: string;
  type?: 'warning' | 'success' | 'danger';
  beforeClose?: () => Promise<unknown>;
}
interface EventProps {
  [key: string]: () => Promise<unknown>;
}

const { loadingBtn, setLoadingBtn } = useLoading(false);
const disabled = ref(false);
const visible = ref(false);
const cardText = ref('');
const handleEvent = reactive<EventProps>({
  confirm: () => new Promise(resolve => {})
});

const confirm = ({ text, type = 'warning', beforeClose }: ConfirmProps) => {
  cardText.value = text;
  if (beforeClose) handleEvent.confirm = beforeClose;
  visible.value = true;
};
const handleConfirm = () => {
  setLoadingBtn(true);
  handleEvent.confirm().finally(() => {
    setLoadingBtn(false);
    disabled.value = true;
    setTimeout(() => {
      visible.value = false;
      disabled.value = false;
    }, 300);
  });
};

defineExpose({
  confirm
});
</script>
