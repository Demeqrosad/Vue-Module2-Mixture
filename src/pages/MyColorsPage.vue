<template>
  <div class="page">
    <page-title>My colors</page-title>
    <my-color-list/>
  </div>
</template>

<script>
import PageTitle from '@/components/shared/PageTitle.vue'
import MyColorList from '@/components/MyColorList.vue'

export default {
  name: 'MyColorsPage',
  components: {
    PageTitle,
    MyColorList
  }
}
</script>
