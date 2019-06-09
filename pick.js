const myObject = {
    name: 'hoge',
    age: 27,
    country: 'Japan'
};

const pick = (object, ...property) => {
    return property.reduce((acc, item) => {
        return {...acc, [item]: object[item]};
    }, {});
};

console.log(pick(myObject, 'name', 'age'));
