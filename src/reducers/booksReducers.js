'use strict'

//BOOKS REDUCERS
export function booksReducers(state={
			books:
					[{
						 _id: 1,
						 title:'Mishka Kakodkar',
						 description: 'Mishka the great',
						 price: 33.33
					 },
					 {
						 _id: 2,
						 title:'Niraj Kakodkar',
						 description: 'Born in a plate',
						 price: 44.44
					 }]
				}, action){
 switch(action.type){

 case "GET_BOOKS_BOOK":
 return{...state, books:[...state.books]}
 break;


 case "POST_BOOK":
 return{books:[...state.books, ...action.payload]}
 break;

 case "DELETE_BOOK":
 //Create a copy of current array of book
const currentBookToDelete = [...state.books]

//Determine index
const indexToDelete = currentBookToDelete.findIndex(

	function(book){
		return book._id = action.payload._id
	}

	)

// use slice operator to remove the book
 return{books:[...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete+1)]}
 //return state = action.payload;
 break;

case "UPDATE_BOOK":
 //Create a copy of current array of book
const currentBookToUpdate = [...state.books]

//Determine index
const indexToUpdate = currentBookToUpdate.findIndex(

	function(book){
		return book._id = action.payload._id
	}

	)

// Create a new book object with the new values and with the same array index of theitem we want to replace. To achieve this wewill use ...spread but we could use concatmethos too

const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],title: action.payload.title}

// This Log has the purpose to show you how newBookToUpdate looks like

console.log("what is it newBookToUpdate",newBookToUpdate);

//use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in thearray

return {books:[...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate,...currentBookToUpdate.slice(indexToUpdate +1)]}
break;

 }
 return state
}
