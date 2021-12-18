export type LessonType = {
    title: string
}
export type ManType = {
    name: "Maksim",
    age: 38,
    lessons: Array<LessonType>,
    address: {
        street: {
            title: string
            dom: number
        }
    }

}
let props: ManType;
beforeEach(() => {
    props = {
        name: "Maksim",
        age: 38,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: "Butlerova street",
                dom: 9
            }
        }
    }
})
test('', () => {
    const n = props.name;
    expect(n).toBe("Maksim")

    const a = props.age;
    expect(a).toBe(38)

    const l = props.lessons;
    expect(l.length).toBe(3);

    const title = props.lessons[1].title
    expect(title).toBe("2")

    const {title: s, dom: d} = props.address.street;
    expect(s).toBe("Butlerova street")
    expect(d).toBe(9)

    const {name, age, lessons, address} = props;
    expect(name).toBe("Maksim")
    expect(age).toBe(38)
    expect(lessons.length).toBe(3)
    expect(address.street.dom).toBe(9)

})

test('', () => {
    const [l1, , ...restLessons] = props.lessons
    expect(restLessons).toStrictEqual([{title: '3'}])
    expect(l1.title).toBe('1')

})