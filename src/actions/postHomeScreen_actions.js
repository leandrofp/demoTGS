import {postHomeScreenConstants} from '../constants/postHomeScreen_constants';

export const homeScreenActions = {
  closeConfirmModal,
  closeModalOk,
  openModalOk,
}

function closeConfirmModal(){
  console.log("LLEGUE A LA ACTION")
  return dispatch => {
    dispatch({type: postHomeScreenConstants.CLOSE_CONFIRM_MODAL});
  };
}

function openModalOk(){
  return dispatch => {
    dispatch({type: postHomeScreenConstants.OPEN_MODAL_OK});
  };
}

function closeModalOk(){
  return dispatch => {
    dispatch({type: postHomeScreenConstants.CLOSE_MODAL_OK});
  };
}

