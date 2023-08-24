import { createSlice } from '@reduxjs/toolkit'

const readabilityStateSlice = createSlice({
    name: 'readabilityState',
    initialState: {
        drawerOpen: false,
        selectedCustomer: {},
        sortedColumn: () => {},

        deletePaymentMethodDialog: false,
        editPaymentMethodDialog: false,
        editCustomerDetailDialog: false,
        selectedCard: {}
        
    },
    reducers: {
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload
        },
        setSortedColumn: (state, action) => {
            state.sortedColumn = action.payload
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        },



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
        closeEditCustomerDetailDialog: (state) => {
            state.editCustomerDetailDialog = false
        },
        updateSelectedCard: (state,action) => {
            state.selectedCard = action.payload
        }
    },
})

export const { 
    setSelectedCustomer, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn,
    

    openDeletePaymentMethodDialog,
    closeDeletePaymentMethodDialog,
    openEditPaymentMethodDialog,
    closeEditPaymentMethodDialog,
    openEditCustomerDetailDialog,
    closeEditCustomerDetailDialog,
    updateSelectedCard
} = readabilityStateSlice.actions

export default readabilityStateSlice.reducer
