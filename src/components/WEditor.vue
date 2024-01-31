<template>
  <div v-if="props.data" ref="editorContainerRef" class="ignore-elements my-2">
    <toolbar :editor="editorRef" :default-config="editorToolbarConfig" mode="simple" class="toolbar" />
    <editor
      v-model="valueHtml.content"
      :default-config="editorConfig"
      mode="simple"
      style="height: calc(100vh - 256px); overflow-y: hidden"
      @on-created="editorCreated"
    />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css';

let Editor, Toolbar;
if (process.client) {
  const res = await import('@wangeditor/editor-for-vue');
  Editor = res.Editor;
  Toolbar = res.Toolbar;
}

// 富文本
const { editorContainerRef, editorRef, editorToolbarConfig, editorConfig, editorCreated } = useEditor({
  toolbarConfig: {
    insertKeys: {
      index: 4,
      keys: ['fontSize', 'fontFamily', 'lineHeight']
    },
    excludeKeys: ['insertVideo', 'insertTable', 'fullScreen', 'blockquote', 'codeBlock', 'todo', '|']
  },
  config: {
    placeholder: '请输入内容'
  }
});

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});
const valueHtml = ref(props.data);

watch(() => props.data, val => {
  console.log(`${val}dd`);
  valueHtml.value = val;
});
</script>
