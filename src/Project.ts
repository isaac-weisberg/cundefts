import { AssetMap } from './AssetMap'
import { UnversionedSingleatom } from './UnversionedSingleatom'
import { VersionedSingleAtom } from './VersionedSingleatom'
import { UnversionedMultiatom } from './UnversionedMultiatom'
import { VersionedMultiatom } from './VersionedMultiatom'
import { GeneralAsset } from '.';

export interface Project {
    title: string
    classname: string
    maps: AssetMap[]
    generals: GeneralAsset[]
    unsin: UnversionedSingleatom[]
    versin: VersionedSingleAtom[]
    unmul: UnversionedMultiatom[]
    vermul: VersionedMultiatom[]
}
