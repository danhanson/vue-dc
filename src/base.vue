<template>
  <div />
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import BaseMixin from 'dc'

@Component
export default abstract class DC<T extends BaseMixin<T>> extends Vue {
  makeChart(parent: HTMLElement, chartGroup?: string): T

  get chart(): T {
    return makeChart(this.$el, this.chartGroup)
  }

  @Prop()
  readonly addFilterHandler?: (filters: any[]) => any[]

  @Prop()
  readonly chartGroup?: string

  @Prop()
  readonly commitHandler?: (
    isRender: boolean,
    callback: (error: any, result: any) => void
  ) => any

  get chartID(): number {
    return this.chart.chartID()
  }
}
</script>
<style>
@import '~dc/dc.css';
</style>
