// function sum(num1,num2){
//     return num1+num2
// }

// let answer = sum(5,10)
// console.log(answer);

// let name = ['A','B','C','D','E'];
// name.splice(2,2);
// console.log(name)
// console.log('This is While');
// let num = 1
// while(num<=0){
//     console.log(num)
//     num++
// }

// console.log('This is DoWhile');
// let num2 = 1
// do{
//     console.log(num2)
//     num2++
// }while(num2<=0);

// let animals = ['ant','bird','cat','dog']

// for(let i=0;i<animal.length;i++){
//     console.log('Animal : ' + animal[i]);
// }

// for (animal of animals){
//     console.log('Animal : ' + animal);
// }

// for (animal in animals){
//     console.log('Animal : ' + animal);
// }


let animals = [
    {
       name:'Ant',
       img:'image/ant.jpg' 
    },
    {
        name:'Bird',
        img:'image/bird.jpg' 
    },
    {
        name:'Cat',
        img:'image/cat.jpg' 
    },
    {
        name:'Dog',
        img:'image/dog.jpg' 
    },
    {
        name:'Lion',
        img:'image/lion.jpg' 
    },
]
function getAnimal(animals){
    for(let i=0;i<animals.length;i++){
        console.log('Animal : ' + animals[i].name);
        console.log('IMG : ' + animals[i].img);

        const ImageEle = document.createElement('img');
        ImageEle.src = animals[i].img;

        const NameAnimal  = document.createElement('p');
        NameAnimal.innerHTML = animals[i].name

        const item = document.createElement('div');
        item.appendChild(ImageEle);
        item.appendChild(NameAnimal);
        item.id = 'item'

        const RootEle = document.getElementById('container');
        RootEle.appendChild(item);
    }


}
getAnimal(animals)