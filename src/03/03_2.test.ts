import {CityType} from "../02/02_2";
import {addMoneyToBudget, createMessage, demolishHouses, repairHouse, toFireStaff, toHireStaff} from "./03";
import {create} from "domain";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        govBuilds: [
            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'Fire-Station',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNum: 1000000
    }
})

//1-создать ф-цию в отдельном файлеб чтобы тесты прошли

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.govBuilds[0], 100000);
    addMoneyToBudget(city.govBuilds[1], -100000);

    expect(city.govBuilds[0].budget).toBe(300000)
    expect(city.govBuilds[1].budget).toBe(400000)
})

//1-дополните тип Housetype (добавьте id от 1 и по возрастанию)
//2- создайте в том же файле еще одну функцию, чтобы тесты прошли

test.skip('Houses should be destroyed', () => {
    demolishHouses(city.houses, 'Happy street');

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test('Firestaff should be increased', () => {

    toFireStaff(city.govBuilds[0], 20)

    expect(city.govBuilds[0].staffCount).toBe(180)
})

test('Hospital staff should be increased', () => {

    toHireStaff(city.govBuilds[0], 20)
    toHireStaff(city.govBuilds[1], -100)

    expect(city.govBuilds[0].staffCount).toBe(220)
    expect(city.govBuilds[1].staffCount).toBe(900)
})

test('Greeting should be correct', ()=>{
    const message = createMessage(city);

    expect(message).toBe('Hello New York citizens! I want you be Happy! All 1000000 men.')
})




