export type GovAddressType={
    street: StreetType
}
export type GovBuildType = {
    type: string,
    budget: number,
    staffCount: number,
    address: GovAddressType
}
export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    govBuilds: Array<GovBuildType>
    citizensNum: number
}