<template>
  <div>
    <data-table />
  </div>
</template>
<script lang="ts">
import { DataTable } from './index.ts'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    DataTable
  }
})
export default class Examples extends Vue {}
</script>
