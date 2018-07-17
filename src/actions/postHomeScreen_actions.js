import {postHomeScreenConstants} from '../constants/postHomeScreen_constants';

export const postHomeScreenActions = {
  closeConfirmModal,
  closeModalOk,
  openModalOk,
}

function closeConfirmModal(){
  return dispatch => {
    dispatch({type: postHomeScreenConstants.closeConfirmModal});
  };
}

function openModalOk(){
  return dispatch => {
    dispatch({type: postHomeScreenConstants.openModalOk});
  };
}

function closeModalOk(){
  return dispatch => {
    dispatch({type: postHomeScreenConstants.closeModalOk});
  };
}

