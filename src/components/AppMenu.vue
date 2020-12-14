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
          icon: 'pi pi-fw pi-home'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info'
        }]
    }
  },
  components:
  {
    Menubar
  }
}
</script>
