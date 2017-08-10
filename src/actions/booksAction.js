'use strict'
//GET BOOKS
export function getBooks(){

	return{
			 type:"GET_BOOK",
			 
		}
}

//POST BOOKS
export function postBooks(book){

	return{
			 type:"POST_BOOK",
			 payload:book

		}
}

//DELETE BOOK
export function deleteBooks(_id){

	return{
			type:"DELETE_BOOK",
			payload: _id

		}
}


//UPDATE BOOK
export function updateBooks(book){

	return{
			type:"UPDATE_BOOK",
			payload: book
	}
}
