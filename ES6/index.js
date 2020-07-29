const createPerson = (name, surname, fieldName, fieldPostfix) => {
    const fullName = name + ' ' + surname;

    return {
        fullName,
        name,
        surname,
        // getJob() {
        //     return 'Front End';
        // },
        [fieldName + fieldPostfix]: 100
    };
};

const person = createPerson('WFM', 'WFM2', 'car', '-model');
console.log(person);