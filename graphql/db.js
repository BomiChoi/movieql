export const people = [
    {
        id: "0",
        name: "Bomi",
        age: 25,
        gender: "female"
    },
    {
        id: "1",
        name: "Nicolas",
        age: 30,
        gender: "male"
    }
];

export const getByID = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}