import { Multiatom } from './MultiatomicAsset'
import { UnversionedSingleatom } from "./UnversionedSingleatom"

export interface UnversionedMultiatom extends UnversionedSingleatom {
    asset: Multiatom
}
