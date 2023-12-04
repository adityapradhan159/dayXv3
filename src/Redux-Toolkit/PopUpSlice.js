import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // showRegisterPopUp: false,
    showRegisterPopUp: {
        show:false,
        showAllInputs:true
    },
    showOtherComps: false
}


export const PopUpSlice = createSlice({
    name: 'PopUpSlice',
    initialState,

    reducers:{
        setShowRegisterPopUp: (state, action) => {
			state.showRegisterPopUp = action.payload;
		},
        setShowOtherComps: (state, action) => {
			state.showOtherComps = action.payload;
		},
    }
})


export const { setShowRegisterPopUp,setShowOtherComps } = PopUpSlice.actions

export default PopUpSlice.reducer 