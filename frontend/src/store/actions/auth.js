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

export const authFail = error =>{
   return {
     type: actionTypes.AUTH_FAIL,
     error: error
  }
}
export const authLogin = (username,password) =>{
   return dispatch => {
     dispath(authStart())
  }
}
