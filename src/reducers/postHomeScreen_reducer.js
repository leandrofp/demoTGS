const initialState = {
  modalConfirm:false,
  ModalOk:false,
  ordenesCompra: [],
  activeIndex:0
};

export function postHomeScreen(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL_OK':{
      let listaux = this.state.list
      const index = this.state.activeIndex
      //listaux.splice(this.state.activeIndex,1)
      return ({ modalOk: true , list : listaux.filter(function(item) {return item.index !== index }) });
    }
    case 'CLOSE_CONFIRM_MODAL':{
      
    }
    case 'CLOSE_MODAL_OK':{
    
    }

    default:
      return state;
  }
}
