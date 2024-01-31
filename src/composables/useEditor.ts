import merge from 'lodash/merge';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

interface EditorOptions {
  config?: Partial<IEditorConfig>;
  toolbarConfig?: Partial<IToolbarConfig>;
}

export default function(options: EditorOptions = { config: {}, toolbarConfig: {} }) {
  // 编辑器容器
  const editorContainerRef = ref(null);
  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef();

  // 工具栏配置
  const editorToolbarConfig = merge(
    {
      excludeKeys: ['codeBlock', '|'],
    },
    options.toolbarConfig || {}
  );

  // 编辑器配置
  const editorConfig = merge(
    {
      placeholder: '请输入正文',
      EXTEND_CONF: {
        mentionConfig: {
          showModal: () => {
          },
          hideModal: () => {
          }
        }
      }
    },
    options.config || {}
  );

  onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
  });

  const editorCreated = (editor: any) => {
    editorRef.value = editor;
  };

  return {
    editorContainerRef,
    editorRef,
    editorToolbarConfig,
    editorConfig,
    editorCreated
  };
}
