import { Multiatom } from './Multiatom'
import { UnversionedSingleatom } from "./UnversionedSingleatom"

export interface UnversionedMultiatom extends UnversionedSingleatom {
    asset: Multiatom
}
