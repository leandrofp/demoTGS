import {postHomeScreenConstants} from '../constants/postHomeScreen_constants';



export const closeConfirmModal=() =>  {
  return {
    type: postHomeScreenConstants.closeConfirmModal
  };
}

export const openModalOk=() => {
  return {
    type: postHomeScreenConstants.openModalOk
  };
}

export const closeModalOk=() => {
  return {
    type: postHomeScreenConstants.closeModalOk
  };
}

