export interface Project {
    title: string|undefined
    classname: string|undefined
    generals: GeneralAssetDeclaration[]|undefined
    unsin: SingleatomicAssetDeclaration[]|undefined
    versin: VersionedSingleatomicAssetDeclaration[]|undefined
    unmul: MultiatomicAssetDeclaration[]|undefined
    vermul: VersionedMultiatomicAssetDeclaration[]|undefined
}

export interface SanitizedProject {
    title: string
    classname: string
    generals: GeneralAssetDeclaration[]
    unsin: SingleatomicAssetDeclaration[]
    versin: VersionedSingleatomicAssetDeclaration[]
    unmul: MultiatomicAssetDeclaration[]
    vermul: VersionedMultiatomicAssetDeclaration[]

}

export interface GeneralAssetDeclaration {
    title: string
    codepath: string
    classname: string
    stringKeys: string[]
}

export interface SingleatomicAssetDeclaration extends GeneralAssetDeclaration {
    root: string
}

export interface MultiatomicAssetDeclaration extends SingleatomicAssetDeclaration {
    assetSchema: MultiatomicAssetSchema
}

export interface MultiatomicAssetSchema {
    keys: string[]
}

export interface VersionedSingleatomicAssetDeclaration extends SingleatomicAssetDeclaration {

}

export interface VersionedMultiatomicAssetDeclaration extends MultiatomicAssetDeclaration {

}
