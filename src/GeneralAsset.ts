import { AssetMap } from ".";

export interface GeneralAsset extends AssetMap {
    classname: string
    stringKeys: string[]
}