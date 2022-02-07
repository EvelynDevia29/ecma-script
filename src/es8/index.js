/**  Object.entries crea una matriz*/

const data = {
    frontend: 'Monica',
    backend: 'Isabel',
    design: 'Juana'
};

const entries = Object.entries(data);
console.log(entries);//Muestra una matriz
console.log(entries.length); //saber cuantos elementos hay


/**Trae los valores en un arreglo */
const data = {
    frontend: 'Monica',
    backend: 'Isabel',
    design: 'Juana'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

/**Padding */
const string = 'hello';

console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-------'));

/**IF TERNARIO, ASYGN AWAIT*/

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsign = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsign();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        comsole.log(error);
    }
};
anotherFunction();