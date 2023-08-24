import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCrmCustomers, 
        apPutCrmCustomer, 
        apiGetCrmCustomersStatistic, 
        apiGetProjectDashboardData, 
        getInstitutionsList, 
        getTeachersList 
    } from 'services/CrmService'

export const getInstitutions = createAsyncThunk('crmCustomers/data/getInstitutions',async (params) => {
    
   const responseData={
    "data": [
        {
            "id": "1",
            "name": "jjsl",
            "institute": "Sun university",
            "email": "jj.s11@yopmail.com",
            "img": "/img/avatars/thumb-1.jpg",
            "role": "Admin",
            "lastOnline": 1623430400,
            "country": "India",
            "state": "Maharashtra",
            "district": "Pune",
            "phone": 9960221626,
            "teachers": "7",
            "students": "14",
            "classess": "4",
            "status": "active",
            "personalInfo": {
                "location": "New York, US",
                "title": "Product Manager",
                "birthday": "10/10/1992",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHoldername": "Carolyn Perkins",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHoldername": "Carolyn Perkins",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "2",
            "name": "Sun university",
            "institute": "Sun university",
            "email": "sun@yopmail.com",
            "img": "/img/avatars/thumb-2.jpg",
            "role": "User",
            "lastOnline": 1632393600,
            "country": "India",
            "state": "Maharashtra",
            "district": "Pune",
            "teachers": "3",
            "phone": 9960221626,
            "students": "20",
            "classess": "3",
            "status": "active",
            "personalInfo": {
                "location": "New York, US",
                "title": "Software Engineer",
                "birthday": "03/02/1984",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Terrance Moreno",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Terrance Moreno",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "3",
            "name": "Readability Academyy",
            "institute": "Readability Academy",
            "email": "ReadabilityAcademy@yopmail.com",
            "img": "",
            "role": "User",
            "phone": 9529859793,
            "country": "India",
            "state": "Maharashtra",
            "district": "Pune",
            "teachers": "3",
            "students": "20",
            "classess": "3",
            "status": "active",
            "personalInfo": {
                "location": "New York, US",
                "title": "UI/UX Designer",
                "birthday": "07/11/1987",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Ron Vargas",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Ron Vargas",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "4",
            "institute": "Call Training",
            "name": "Sheetal",
            "email": "peacesheetal222_2@yopmail.com",
            "phone": 9922918546,
            "country": "India",
            "state": "Maharashtra",
            "district": "Pune",
            "teachers": "2",
            "students": "1",
            "classess": "1",
            "img": "/img/institute/kids-160168__340_a3d497db-3724-4ca6-af9b-e161061dc6d2.jpg",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "New York, US",
                "title": "HR Executive",
                "birthday": "07/11/1987",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Luke Cook",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Luke Cook",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "5",
            "institute": "Downlands Community Primary School",
            "name": "downlands",
            "email": "downlands@yopmail.com",
            "phone": 9922918546,
            "country": "United Kingdom",
            "state": "Dorset",
            "district": "dorset",
            "teachers": "8",
            "students": "5",
            "classess": "2",
            "img": "/img/avatars/thumb-6.jpg",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "New York, US",
                "title": "Frontend Developer",
                "birthday": "17/11/1993",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Joyce Freeman",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Joyce Freeman",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "6",
            "institute": "little leaf",
            "name": "little leafy",
            "email": "little.leaf3@yopmail.com",
            "phone": 9922765432,
            "country": "United Kingdom",
            "state": "Dorset",
            "district": "dorset",
            "teachers": "1",
            "students": "13",
            "classess": "4",
            "img": "/img/avatars/thumb-3.jpg",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "London, UK",
                "title": "Compliance Manager",
                "birthday": "17/11/1993",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Samantha Phillips",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Samantha Phillips",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "7",
            "institute": "Gonzalves ele",
            "name": "KR Gonzalves",
            "email": "little.leaf3@yopmail.com",
            "phone": 9922765432,
            "country": "United Kingdom",
            "state": "California",
            "district": "ABC School District",
            "teachers": "2",
            "students": "25",
            "classess": "2",
            "img": "",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "London, UK",
                "title": "Compliance Manager",
                "birthday": "17/11/1993",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Tara Fletcher",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Tara Fletcher",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "8",
            "institute": "UK public school",
            "name": "ukpublicschool",
            "email": "ukpublicschool@yopmail.com",
            "phone": 9989898988,
            "country": "United Kingdom",
            "state": "Dorset",
            "district": "Dorset",
            "teachers": "4",
            "students": "18",
            "classess": "6",
            "img": "",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "London, UK",
                "title": "Compliance Manager",
                "birthday": "17/11/1993",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Frederick Adams",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Frederick Adams",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "9",
            "institute": "Stowers Elementory",
            "name": "KR",
            "email": "kr-stowers-ele@yopmail.com",
            "phone": 3109773821,
            "country": "United Kingdom",
            "state": "California",
            "district": "ABC School District",
            "teachers": "3",
            "students": "4",
            "classess": "3",
            "img": "/img/avatars/thumb-2.jpg",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "Texas, US",
                "title": "Compliance Manager",
                "birthday": "03/06/1991",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Carolyn Hanson",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Carolyn Hanson",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        },
        {
            "id": "10",
            "institute": "dorset public school",
            "name": "dorset",
            "email": "doremon123@yopmail.com",
            "phone": 3109773821,
            "country": "United Kingdom",
            "state": "California",
            "district": "ABC School District",
            "teachers": "3",
            "students": "4",
            "classess": "3",
            "img": "",
            "role": "User",
            "status": "active",
            "personalInfo": {
                "location": "Texas, US",
                "title": "Compliance Manager",
                "birthday": "03/06/1991",
                "phoneNumber": "+12-123-1234",
                "facebook": "facebook.com/sample",
                "twitter": "twitter.com/sample",
                "pinterest": "pinterest.com/sample",
                "linkedIn": "linkedin/sample"
            },
            "orderHistory": [
                {
                    "id": "#36223",
                    "item": "Mock premium pack",
                    "status": "pending",
                    "amount": 39.9,
                    "date": 1639132800
                },
                {
                    "id": "#34283",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1636790880
                },
                {
                    "id": "#32234",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1634090880
                },
                {
                    "id": "#31354",
                    "item": "Business board pro subscription",
                    "status": "paid",
                    "amount": 59.9,
                    "date": 1631532800
                }
            ],
            "paymentMethod": [
                {
                    "cardHolderName": "Brittany Hale",
                    "cardType": "VISA",
                    "expMonth": "12",
                    "expYear": "25",
                    "last4Number": "0392",
                    "primary": true
                },
                {
                    "cardHolderName": "Brittany Hale",
                    "cardType": "MASTER",
                    "expMonth": "06",
                    "expYear": "25",
                    "last4Number": "8461",
                    "primary": false
                }
            ],
            "subscription": [
                {
                    "plan": "Business board pro",
                    "status": "active",
                    "billing": "monthly",
                    "nextPaymentDate": 1639132800,
                    "amount": 59.9
                }
            ]
        }
    ],
    "total": 15
}
  //  return response.data
  return responseData;
})

export const getTeachers = createAsyncThunk('crmCustomers/data/getTeachers',async (params) => {
   // console.log('tacher3');
    const response = await getTeachersList(params)
    return response.data
})

export const getProjectDashboardData = createAsyncThunk('crmCustomers/data/getProjectDashboardData',async () => {
    const response = await apiGetProjectDashboardData()
    console.log('inst store');
    return response.data
})

export const getCustomerStatistic = createAsyncThunk('crmCustomers/data/getCustomerStatistic',async () => {
    const response = await apiGetCrmCustomersStatistic()
    return response.data
})

export const getInstituteStatistic = createAsyncThunk('crmCustomers/data/getInstituteStatistic',async () => {
    const response = await apiGetCrmCustomersStatistic()
    return response.data
})

export const getTeacherStatistic = createAsyncThunk('crmCustomers/data/getTeacherStatistic',async () => {
    const response = await apiGetCrmCustomersStatistic()
    return response.data
})

export const getCustomers = createAsyncThunk('crmCustomers/data/getCustomers',async (params) => {
   // console.log( " >>>>> instr=itution slice ")
    const response = await apiGetCrmCustomers(params)
    return response.data
})

export const putCustomer = createAsyncThunk('crmCustomers/data/putCustomer',async (data) => {
    const response = await apPutCrmCustomer(data)
    return response.data
})

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: ''
    }
}

export const initialFilterData = {
    status: '',
}

const dataSlice = createSlice({
    name: 'crmCustomers/data',
    initialState: {
        loading: false,
        customerList: [],
        statisticData: {
            "totalCustomers": {
                "value": 247,
                "growShrink": 17.2
            },
            "activeCustomers": {
                "value": 50,
                "growShrink": 32.7
            },
            "newCustomers": {
                "value": 24,
                "growShrink": -2.3
            }
        },
        statisticInstituteData: {
            "totalCustomers": {
                "value": 247,
                "growShrink": 22.2
            },
            "activeCustomers": {
                "value": 50,
                "growShrink": 32.7
            },
            "newCustomers": {
                "value": 24,
                "growShrink": -2.3
            }
        },
        statisticTeacherData: {
            "totalCustomers": {
                "value": 247,
                "growShrink": 19.2
            },
            "activeCustomers": {
                "value": 50,
                "growShrink": 32.7
            },
            "newCustomers": {
                "value": 24,
                "growShrink": -2.3
            }
        },
        tableData: initialTableData,
        filterData: initialFilterData,
        dashboardData: {},
        institutionList: [],
        teachersList:  []
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setInsTableData: (state, action) => {
            state.institutionList = action.payload
          //  state.institutionList = action.payload
        },
        setCustomerList: (state, action) => {
            state.customerList = action.payload
        },
        setInstitutionsList: (state, action) => {
          //  state.institutionList = action.payload
        },
        setTeachersList: (state, action) => {
            state.teachersList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getProjectDashboardData.fulfilled]: (state, action) => {
            state.dashboardData = action.payload
            state.loading = false
        },
        [getProjectDashboardData.pending]: (state) => {
            state.loading = true
        },
        [getInstitutions.fulfilled]: (state, action) => {

           // console.log(" >>>>> getInstitutions.fulfilled ", action.payload.data);
            state.institutionList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getInstitutions.pending]: (state) => {
           // console.log(" >>>>> getInstitutions.pending ");
            //state.loading = true
        },
        [getTeachers.fulfilled]: (state, action) => {
            //console.log(" >>>>> getTeachers.fulfilled ", action.payload.data);
            state.teachersList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getTeachers.pending]: (state) => {
            state.loading = true
        },
        [getCustomers.fulfilled]: (state, action) => {
           // console.log(" >>>>> getCustomers.fulfilled ", action.payload.data);
            state.customerList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCustomers.pending]: (state) => {
            state.loading = true
        },
        [getCustomerStatistic.pending]: (state) => {
            state.statisticLoading = true
        },
        [getCustomerStatistic.fulfilled]: (state, action) => {
            state.statisticData = action.payload
            state.statisticLoading = false
        },
        [getInstituteStatistic.pending]: (state) => {
            state.statisticLoading = true
        },
        [getInstituteStatistic.fulfilled]: (state, action) => {
            state.statisticInstituteData = action.payload
            state.statisticLoading = false
        },
        [getTeacherStatistic.pending]: (state) => {
            state.statisticLoading = true
        },
        [getTeacherStatistic.fulfilled]: (state, action) => {
            state.statisticTeacherData = action.payload
            state.statisticLoading = false
        },
    }
})

export const { 
    setTableData,
    setInsTableData,
    setCustomerList,
    setFilterData,
    setInstitutionsList
} = dataSlice.actions

export default dataSlice.reducer
