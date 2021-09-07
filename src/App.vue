<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo() {
    return {
      // 页面标题
      title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
      // 动态设置标题（页面标题 + 系统标题）
      titleTemplate: (title) => {
        return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
      },
    }
  },
}
</script>
