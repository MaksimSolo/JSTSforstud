import {StudentType} from "../02/02";
import {addSkill, doesStudLivIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimych',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML,CSS'
            },
            {
                id: 2,
                title: 'React'
            },
            {
                id: 3,
                title: 'Node JS'
            }
        ]
    }
})
test('New tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined();
})

test('Student status should be active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student live in city', ()=>{
    const result1 = doesStudLivIn(student, 'Moscow')
    const result2 = doesStudLivIn(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
