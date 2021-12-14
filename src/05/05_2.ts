import {GovBuildType, HouseType} from "../02/02_2";

export function getStreetsTitle(builds: Array<GovBuildType>) {
    return builds.map(b => b.address.street.title)
}

export const createMess = (h: Array<HouseType>) => {
    return h.map(el => `Hello guys from ${el.address.street.title}`
    )
}