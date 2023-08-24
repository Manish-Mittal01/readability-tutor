import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'crmCustomerDetails/state',
    initialState: {
        deletePaymentMethodDialog: false,
        editPaymentMethodDialog: false,
        editCustomerDetailDialog: false,
        editCustomerBooksDialog: false,
        selectedCard: {}
    },
    reducers: {
        openDeletePaymentMethodDialog: (state) => {
            state.deletePaymentMethodDialog = true
        },
        closeDeletePaymentMethodDialog: (state) => {
            state.deletePaymentMethodDialog = false
        },
        openEditPaymentMethodDialog: (state) => {
            state.editPaymentMethodDialog = true
        },
        closeEditPaymentMethodDialog: (state) => {
            state.editPaymentMethodDialog = false
        },
        openEditCustomerDetailDialog: (state) => {
            state.editCustomerDetailDialog = true
        },
        openEditCustomerBooksDialog: (state) => {
            state.editCustomerBooksDialog = true
        },
        closeEditCustomerDetailDialog: (state) => {
            state.editCustomerDetailDialog = false
        },
        closeEditCustomerBooksDialog: (state) => {
            state.editCustomerBooksDialog = false
        },
        updateSelectedCard: (state,action) => {
            state.selectedCard = action.payload
        },
    },
})

export const { 
    openDeletePaymentMethodDialog,
    closeDeletePaymentMethodDialog,
    openEditPaymentMethodDialog,
    closeEditPaymentMethodDialog,
    openEditCustomerDetailDialog,
    openEditCustomerBooksDialog,
    closeEditCustomerDetailDialog,
    closeEditCustomerBooksDialog,
    updateSelectedCard
} = stateSlice.actions

export default stateSlice.reducer
