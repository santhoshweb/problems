
let objFlatten = {
    a: 2,
    b: {
        c: {
            d: 3
        }
    },
    e: {
        f: {
            g: {
                h: 4
            }
        }
    },
    i: 5
};

function flattenFunction(objFlatten) {
    let toReturn = [];

    for (let i in objFlatten) {
        if (!objFlatten.hasOwnProperty(i)) continue;

        if ((typeof objFlatten[i]) == 'object') {
            let flatObject = flattenFunction(objFlatten[i]);
            for (let x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;
                toReturn.push(flatObject[x]);
            }
        } else toReturn.push(objFlatten[i]);

    }
    return toReturn;
}
let result = flattenFunction(objFlatten);
console.log(result);

