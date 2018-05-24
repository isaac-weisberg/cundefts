import { GeneralAsset } from "./GeneralAsset";

export interface UnversionedSingleatom extends GeneralAsset {
    title: string
    root: string
    codepath: string
    classname: string
    keys: string[]
}
