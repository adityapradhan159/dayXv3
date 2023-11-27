import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showRegisterPopUp: false,
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