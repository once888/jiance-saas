<template>
  <div class="content">
    <div class="list">
      <div class="content-control">
        <v-card class="mx-auto">
          <v-toolbar color="white">
            <v-toolbar-title>文章列表</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="black" variant="flat" icon="mdi-plus" @click="handleAdd" size="small">
            </v-btn>
            <v-btn color="black" variant="flat" icon="mdi-refresh" @click="loadItems()" size="small" style="margin-left: 10px;">
            </v-btn>
          </v-toolbar>
        </v-card>
      </div>
      <div class="content-list">
        <v-data-table-server
            density="comfortable"
            height="100%"
            hover
            v-model="selected"
            v-model:page="page"
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="serverItems"
            :items-per-page-options="itemsPerPageOptions"
            :loading="loading"
            loading-text="Loading... Please wait"
            item-value="id"
            @update:options="loadItems"
        >
          <template v-slot:item.index="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table-server>
      </div>
    </div>
    <!-- 文章详情 -->
    <v-dialog v-model="visible" fullscreen>
      <v-card>
        <v-card-title>
          <div class="dialog-title">
            <span class="text-h5">{{ title }}</span>
            <v-icon icon="mdi-close" @click="visible = false"></v-icon>
          </div>
        </v-card-title>
        <v-form ref="textFieldRef" @submit.prevent="handleSave">
          <v-card-text style="padding-left: 10px;padding-bottom: 0;">
            <v-text-field
                density="compact"
                variant="outlined"
                label="Title"
                placeholder="请输入标题"
                :rules="rules.title"
                v-model="editorData.title"
            ></v-text-field>
          </v-card-text>
        </v-form>
        <w-editor :data="editorData" />
        <v-card-actions>
          <div class="dialog-bottom">
            <v-btn variant="tonal" @click="visible = false">关闭</v-btn>
            <v-btn
              class="text-none text-subtitle-1"
              color="blue"
              variant="flat"
              :loading="loadingBtn"
              @click="handleSave"
            >保存</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <message-box ref="messageBoxRef" />
  </div>
</template>

<script>
import { useManageSetup } from './hooks';
import { VDataTableServer } from 'vuetify/labs/VDataTable';

export default defineComponent({
  name: 'Manage',
  components: { VDataTableServer },
  setup() {
    return {
      ...useManageSetup()
    };
  }
});
</script>

<style lang="scss" scoped>
:deep(.v-table) {
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #E0E0E0;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-control {
    width: 100%;
    height: 60px;
  }
  &-list {
    width: 100%;
    height: calc(100% - 76px);
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>
