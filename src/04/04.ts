import {GovBuildType} from "../02/02_2";

const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}
const oldAges = [100]; //>90

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

type CourseType = {
    title: string
    price: number
}

const chipPredicate = (course: CourseType)=>{
    return course.price < 160
}

export const getBuildWithStaffGreatThan = (builds: Array<GovBuildType>, number: number)=>{
    return builds.filter(b=>b.staffCount>500)
}

