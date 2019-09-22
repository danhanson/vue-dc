import DC from './base.vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { ascending, descending } from 'd3'
import { dataTable, DataTableWidget } from 'dc'

@Component
export default class DataTable extends DC<DataTableWidget> {
  makeChart(parent: HTMLElement, chartGroup?: string): DataTableWidget {
    return dataTable(parent, chartGroup)
  }

  @Prop()
  readonly beginSlice?: number
  @Prop()
  readonly endSlice?: number
  @Prop()
  readonly order?: ascending | descending
  @Prop()
  readonly section?: () => ''
  @Prop()
  readonly showSections?: boolean
  @Prop()
  readonly size?: number

  @Watch('beginSlice')
  doSomething(): void {
    console.log('EGIN SLICE')
  }
}
