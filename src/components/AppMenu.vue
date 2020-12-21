<template>
  <Menubar :model="items">
      <template #start>
      </template>
      <template #end>
      </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar'

export default {
  data () {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter',
          to: '/mixin'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info',
          to: '/about'
        }]
    }
  },
  components:
  {
    Menubar
  }
}
</script>
