/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const items = [
    {
     id: 1,
     timestamp: 1656076800000,
     price: 10,
     category: 'Food',
     itemName: 'Pizza',
   },{
     id: 2,
     timestamp: 1656076800000,
     price: 340,
     category: 'Food',
     itemName: 'rice',
   },{
     id: 2,
     timestamp: 1656076800000,
     price: 1500,
     category: 'friut',
     itemName: 'mango',
   }
  ]
  
  
  function calculateTotalSpentByCategory(transactions) {
    // we have created data to store the object
    const data = {}
    transactions.forEach(item => {
      // here we are iterating through elements of array more espically category and price 
      const { category , price } = item
      // this condition which leads to fail then in else part data object will be initialize with category = food and price = 100 data = { food : 100 }
      if(category in data){
        // this will lead to fail
        data[category] = data[category] + price
      }
      else{
        data[category] = price
      }
    });
    // creating a array which will store array of object
    const arrayOfData =[]
    for(let category in data){
        arrayOfData.push({type : category, TotalCost : data[category]})
    }
  
    return arrayOfData;
  }

  console.log(calculateTotalSpentByCategory(items))

  
  module.exports = calculateTotalSpentByCategory;