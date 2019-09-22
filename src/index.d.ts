import 'reflect-metadata'
import { NaturallyOrderedValue, FilterValue, Predicate } from 'crossfilter2'

/*
 * dc.js types are too leniant and crossfilter types are too strict
 *
 * We should accomodate fake groups and fake dimensions
 */

interface Group<T extends NaturallyOrderedValue> {
  all(): T[]
  top(): T[]
  dispose(): this
}

interface Dimension<T extends NaturallyOrderedValue> {
  filter(filter: FilterValue): this;
  filterExact(value: T): this;
  filterRange(range: [T, T]): this;
  filterFunction(predicate: Predicate<T>): this;
}
