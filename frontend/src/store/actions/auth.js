#author : feysel abdu


import * as actionTypes from actionTypes';

export constauthStart = () {
   
    return {
	type: actionTypes.AUTH_START
  }

}

export const authSuccess = token => {
   return {
      type: actionTypes.AUTH_SUCCESS,
      token : token

	
   }
}


