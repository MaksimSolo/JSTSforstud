import {StudentType} from "../02/02";
import {CityType, GovBuildType, HouseType} from "../02/02_2";

/*export const sum = (a:number,b:number) => {
    return a+b;
}

export function sum2(a:number,b:number) {
    return a+b;
}*/

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

/*
export function addSkill2(st:StudentType, skill:string) {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}
*/

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudLivIn = (st: StudentType, city: string) => {
    return st.address.city.title === city
}

export function addMoneyToBudget(building: GovBuildType, addMoney: number) {
    building.budget = building.budget + addMoney
}

/*export const demolishHouses = (houses: Array<HouseType>, street: string) => {
    houses.filter(h => h.address.street.title !== street)
}*/

export const repairHouse = (house: HouseType)=>{
    house.repaired = true;
}

export function toFireStaff(building: GovBuildType, staff: number){
    building.staffCount -=staff
}
export function toHireStaff(building: GovBuildType, staff: number){
    building.staffCount +=staff
}
export function createMessage(city: CityType) {
    return (`Hello ${city.title} citizens! I want you be Happy! All ${city.citizensNum} men.`)
}

