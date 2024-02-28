// task 45


type car = {
    manufacture: String
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = createCar("toyota","corolla", { color: "sliver", year: "2024"})
console.log(mycar)