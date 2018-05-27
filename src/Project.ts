import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject export class MultiatomicAssetSchema {
    @JsonProperty("keys", [String])
    keys: string[] = []
}

@JsonObject export class GeneralAssetDeclaration {
    @JsonProperty("title", String)
    title: string = ""

    @JsonProperty("codepath", String)
    codepath: string = ""

    @JsonProperty("classname", String)
    classname: string = ""

    @JsonProperty("stringKeys", [String])
    stringKeys: string[] = []
}

@JsonObject export class SingleatomicAssetDeclaration extends GeneralAssetDeclaration {
    @JsonProperty("root", String)
    root: string = ""
}

@JsonObject export class MultiatomicAssetDeclaration extends SingleatomicAssetDeclaration {
    @JsonProperty("assetSchema", MultiatomicAssetSchema)
    assetSchema: MultiatomicAssetSchema = new MultiatomicAssetSchema()
}

@JsonObject export class VersionedSingleatomicAssetDeclaration extends SingleatomicAssetDeclaration {

}

@JsonObject export class VersionedMultiatomicAssetDeclaration extends MultiatomicAssetDeclaration {

}

@JsonObject export class Project {
    @JsonProperty("title", String)
    title: string = ""

    @JsonProperty("classname", String)
    classname: string = ""

    @JsonProperty("generals", [GeneralAssetDeclaration], true)
    generals: GeneralAssetDeclaration[] = []

    @JsonProperty("unsin", [SingleatomicAssetDeclaration], true)
    unsin: SingleatomicAssetDeclaration[] = []

    @JsonProperty("versin", [VersionedSingleatomicAssetDeclaration], true)
    versin: VersionedSingleatomicAssetDeclaration[] = []

    @JsonProperty("unmul", [MultiatomicAssetDeclaration], true)
    unmul: MultiatomicAssetDeclaration[] = []

    @JsonProperty("vermul", [VersionedMultiatomicAssetDeclaration], true)
    vermul: VersionedMultiatomicAssetDeclaration[] = []
}