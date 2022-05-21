/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */
let arrowFunction = (a = 10, b = 5) => {
console.log(a + b);
};
arrowFunction();
arrowFunction(3);
arrowFunction(3, 4);

///////////////////////


/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
let { title, gender, year } = game;
console.log(title, gender, year);

/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];
let [ fruit1, fruit2, fruit3 ] = fruits;
console.log(fruit1, fruit2, fruit3);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let { name, race } = animalFunction();
console.log(name, race)

/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

const car = {name2: 'Mazda 6', itv: [2015, 2011, 2020] }
let { name2, itv } = car;
console.log(`nombre ${name2} itv ${itv}`);
let [ year1, year2, year3 ] = itv;
console.log(year1, year2, year3);


///////////////////////

/* 3.1 Dado el siguiente array, crea una copia usando spread operators. */
let pointsList = [32, 54, 21, 64, 75, 43]
let pointListCopy = [...pointsList];
console.log(pointListCopy);

/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators. */
let toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopy = {...toy};
console.log(toyCopy);

/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */
pointsList = [32, 54, 21, 64, 75, 43];
let pointsLis2 = [54,87,99,65,32];
let pointListNew = [...pointsList, ...pointsLis2];
console.log(pointListNew);
/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
let toyNew = {...toy, ...toyUpdate};
console.log(toyNew);

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
let colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let colorsNew = [...colors];
colorsNew.splice(2,1)
console.log(colorsNew);