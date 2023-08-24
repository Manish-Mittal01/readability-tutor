import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    apiGetCrmCustomerDetails, 
    apiDeleteCrmCustomer, 
    apPutCrmCustomer,
    apiGetProjectDashboardData 
} from 'services/CrmService'

export const getProjectDashboardData = createAsyncThunk('crmCustomers/data/getProjectDashboardData',async () => {
  const response = await apiGetProjectDashboardData()
 
 return response.data
})

export const getCustomer = createAsyncThunk('crmCustomerDetails/data/getCustomer',async (data) => {
    console.log('ccccc');
    const response = await apiGetCrmCustomerDetails(data)
    return response.data
})

export const deleteCustomer = createAsyncThunk('crmCustomerDetails/data/deleteCustomer',async (data) => {
    const response = await apiDeleteCrmCustomer(data)
    return response.data
})

export const putCustomer = createAsyncThunk('crmCustomerDetails/data/putCustomer',async (data) => {
    const response = await apPutCrmCustomer(data)
    return response.data
})

const dataSlice = createSlice({
    name: 'crmCustomerDetails/data',
    initialState: {
        loading: false,
        profileData: {},
        subscriptionData: [],
        paymentHistoryData: [],
        paymentMethodData: []
    },
    reducers: {
        updatePaymentMethodData: (state, action) => {
            state.paymentMethodData = action.payload
        },
        updateProfileData: (state, action) => {
            state.profileData = action.payload
        },
    },
    extraReducers: {
        [getCustomer.fulfilled]: (state, action) => {
            state.loading = false
            state.profileData = action.payload
            state.subscriptionData = action.payload?.subscription || []
            state.paymentHistoryData = action.payload?.orderHistory || []
            state.paymentMethodData = action.payload?.paymentMethod || []
        },
        [getProjectDashboardData.fulfilled]: (state, action) => {
            state.dashboardData = action.payload
            state.loading = false
        },
        [getProjectDashboardData.pending]: (state) => {
            state.loading = true
        },
        [deleteCustomer.fulfilled]: () => {},
        [putCustomer.fulfilled]: () => {},
        [getCustomer.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { updatePaymentMethodData, updateProfileData } = dataSlice.actions

export default dataSlice.reducer
