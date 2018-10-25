//defining a class called Grocery
class Grocery {
    name: string;
    quantity: number;
}

//creating array for grocery items
let groceryItems: Grocery[] = [{name: 'milk', quantity: 3}, {name:'egg', quantity: 5}, {name: 'bread', quantity: 7}]

let count: number;

//code for displaying item in the browser
for(count = 0; count < groceryItems.length; count++){
document.write('Item: ' + groceryItems[count].name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity: ' + groceryItems[count].quantity)
    document.write('<br />')
}


