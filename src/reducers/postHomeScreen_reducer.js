const initialState = {
  modalConfirm:false,
  modalOk:false,
  ordenesCompra: [],
  activeIndex:0,

};

export function homeScreen(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL_OK':{
      let listaux = this.state.list
      const index = this.state.activeIndex
      //listaux.splice(this.state.activeIndex,1)
      return Object.assign({} , state, { modalOk: true , list : listaux.filter(function(item) {return item.index !== index }) });
    }
    case 'CLOSE_CONFIRM_MODAL':{
      return Object.assign({}, state, {
        modalConfirm: false
      });
    }
    case 'CLOSE_MODAL_OK':{
      return Object.assign({}, state, {
        modalConfirm: false , modalOk:false
      });
    }
    default:
      return state;
  }
}
