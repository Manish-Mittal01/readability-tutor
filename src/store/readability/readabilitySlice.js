import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { apiGetCrmCustomers, 
     apiGetCrmCustomerBooks, 
        apPutCrmCustomer, 
        apiGetCrmCustomersStatistic, 
        apiGetProjectDashboardData, 
        getInstitutionsList, 
        getTeachersList,
        getBooksList,
        getReportList,
        getClassesslist,
        apiDeleteCrmCustomer,
        apiGetCrmCustomerDetails 
    } from 'services/CrmService'

    
export const getInstitutions = createAsyncThunk('crmCustomers/data/getInstitutions',async (params) => {
    const response = await getInstitutionsList(params)
    console.log('response',response);
    return response.data
})

export const getTeachers = createAsyncThunk('crmCustomers/data/getTeachers',async (params) => {
   // console.log('tacher1');
    //const response = await getTeachersList(params)
    const responseData={
        "data": {
            "data": [
                {
                    "id": "1",
                    "name": "mamta",
                    "email": "mamtafromjj@yopmail.com",
                    "institution": "JJ School of Arts",
                    "district": "Pune",
                    "state": "Maharashtra",
                    "country": "India",
                    "student": "1",
                    "books": "0",
                    "classess": "1",
                    "created_date": "22 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                    "name": "Cristina Magistrado",
                    "email": "Cristina.Magistrado@yopmail.com",
                    "phone": "9922918546",
                    "institution": "Readability Academy",
                    "district": "Pune",
                    "state": "Maharashtra",
                    "country": "India",
                    "student": "2",
                    "books": "25",
                    "classess": "1",
                    "created_date": "23 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "name": "mamta",
                            "email": "mamtafromjj@yopmail.com",
                            "institution": "JJ School of Arts",
                            "district": "Pune",
                            "state": "Maharashtra",
                            "country": "India",
                            "student": "1",
                            "books": "0",
                            "classess": "1",
                            "created_date": "23 jan,2022",
                            "img": "/img/avatars/thumb-1.jpg",
                            "role": "Admin",
                            "lastOnline": 1623430400,
                            "status": "active"
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
                    "name": "Vimal Patel",
                    "email": "vimalpatel19122022_1@yopmail.com",
                    "phone": "9922918546",
                    "institution": "Shanu Patel School",
                    "district": "Pune",
                    "state": "Maharashtra",
                    "country": "India",
                    "student": "0",
                    "books": "0",
                    "classess": "0",
                    "created_date": "25 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                    "name": "Vimal Patel",
                    "email": "vimalpatel19122022_1@yopmail.com",
                    "phone": "1234786790",
                    "institution": "Vimal Patel School",
                    "district": "Pune",
                    "state": "Maharashtra",
                    "country": "India",
                    "student": "0",
                    "books": "0",
                    "classess": "0",
                    "created_date": "26 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                    "name": "Malvika Tambe",
                    "email": "malvikatambe123@yopmail.com",
                    "phone": "123456790",
                    "institution": "Vimal Patel School",
                    "district": "Pune",
                    "state": "Maharashtra",
                    "country": "India",
                    "student": "0",
                    "books": "0",
                    "classess": "0",
                    "created_date": "27 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "item": "Mock premium pack kk",
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
                    "name": "latifa",
                    "email": "latifa@yopmail.com",
                    "phone": "123456789",
                    "institution": "UK public school",
                    "district": "dorset",
                    "state": "dorset",
                    "country": "United Kingdom",
                    "student": "1",
                    "books": "0",
                    "classess": "1",
                    "created_date": "28 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "item": "Mock premium pack jjjjjjj",
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
                    "name": "Malvika T",
                    "email": "malvika123@yopmail.com",
                    "phone": "123456790",
                    "institution": "Downlands Community Primary School",
                    "district": "dorset",
                    "state": "dorset",
                    "country": "United Kingdom",
                    "student": "0",
                    "books": "0",
                    "classess": "0",
                    "created_date": "29 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "item": "Mock premium pack fghgfh",
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
                    "name": "Anushka Sharma ",
                    "email": "anushka.sharma@demo.com",
                    "phone": "123456790",
                    "institution": "UK public school\t",
                    "district": "dorset",
                    "state": "dorset",
                    "country": "United Kingdom",
                    "student": "0",
                    "books": "0",
                    "classess": "0",
                    "created_date": "30 jan",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "item": "Mock premium pack kkk",
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
                    "name": "Maria Wonderland",
                    "email": "maria@demo.com",
                    "phone": "123456790",
                    "institution": "Test-Inst-CA",
                    "district": "ABC School District\t",
                    "state": "California",
                    "country": "United Kingdom",
                    "student": "0",
                    "books": "0",
                    "classess": "0",
                    "created_date": "2 feb",
                    "img": "/img/avatars/thumb-1.jpg",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "item": "Mock premium pack gjdfj",
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
                    "name": "Sayali B",
                    "email": "sayali999@yopmail.com",
                    "phone": "123456790",
                    "institution": "Sun university\t",
                    "district": "Maharashtra",
                    "state": "Maharashtra",
                    "country": "India",
                    "student": "1",
                    "books": "2",
                    "classess": "1",
                    "created_date": "3 feb",
                    "img": "",
                    "role": "Admin",
                    "lastOnline": 1623430400,
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
                            "item": "Mock premium pack ghj",
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
        },
        "status": 201,
        "statusText": "Created",
        "headers": {
            "content-type": "application/json"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 60000,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {
                "FormData": null
            },
            "headers": {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
            },
            "baseURL": "/api",
            "url": "/crm/teachers",
            "method": "post",
            "data": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"filterData\":{\"status\":\"\"}}"
        },
        "request": {
            "_eventListeners": {
                "loadend": [
                    null
                ],
                "abort": [
                    null
                ],
                "load": [
                    null
                ],
                "progress": [
                    null
                ],
                "loadstart": [
                    null
                ]
            },
            "readyState": 4,
            "requestHeaders": {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
            },
            "requestBody": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"filterData\":{\"status\":\"\"}}",
            "status": 201,
            "statusText": "Created",
            "upload": {
                "_eventListeners": {
                    "loadend": [
                        null
                    ],
                    "abort": [
                        null
                    ],
                    "load": [
                        null
                    ],
                    "progress": [
                        null
                    ],
                    "loadstart": [
                        null
                    ]
                }
            },
            "onload": null,
            "onloadstart": null,
            "onprogress": null,
            "onreadystatechange": null,
            "method": "POST",
            "url": "/api/crm/teachers",
            "async": true,
            "responseText": "{\"data\":[{\"id\":\"1\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"institution\":\"JJ School of Arts\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"22 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"2\",\"name\":\"Cristina Magistrado\",\"email\":\"Cristina.Magistrado@yopmail.com\",\"phone\":\"9922918546\",\"institution\":\"Readability Academy\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"2\",\"books\":\"25\",\"classess\":\"1\",\"created_date\":\"23 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Software Engineer\",\"birthday\":\"03/02/1984\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"institution\":\"JJ School of Arts\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"23 jan,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"3\",\"name\":\"Vimal Patel\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"9922918546\",\"institution\":\"Shanu Patel School\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"25 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"UI/UX Designer\",\"birthday\":\"07/11/1987\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Ron Vargas\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Ron Vargas\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"4\",\"name\":\"Vimal Patel\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"1234786790\",\"institution\":\"Vimal Patel School\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"26 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"HR Executive\",\"birthday\":\"07/11/1987\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Luke Cook\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Luke Cook\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"5\",\"name\":\"Malvika Tambe\",\"email\":\"malvikatambe123@yopmail.com\",\"phone\":\"123456790\",\"institution\":\"Vimal Patel School\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"27 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Frontend Developer\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack kk\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Joyce Freeman\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Joyce Freeman\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"6\",\"name\":\"latifa\",\"email\":\"latifa@yopmail.com\",\"phone\":\"123456789\",\"institution\":\"UK public school\",\"district\":\"dorset\",\"state\":\"dorset\",\"country\":\"United Kingdom\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"28 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"London, UK\",\"title\":\"Compliance Manager\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack jjjjjjj\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Samantha Phillips\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Samantha Phillips\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"7\",\"name\":\"Malvika T\",\"email\":\"malvika123@yopmail.com\",\"phone\":\"123456790\",\"institution\":\"Downlands Community Primary School\",\"district\":\"dorset\",\"state\":\"dorset\",\"country\":\"United Kingdom\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"29 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"London, UK\",\"title\":\"Compliance Manager\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack fghgfh\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Tara Fletcher\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Tara Fletcher\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"8\",\"name\":\"Anushka Sharma \",\"email\":\"anushka.sharma@demo.com\",\"phone\":\"123456790\",\"institution\":\"UK public school\\t\",\"district\":\"dorset\",\"state\":\"dorset\",\"country\":\"United Kingdom\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"30 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"London, UK\",\"title\":\"Compliance Manager\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack kkk\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Frederick Adams\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Frederick Adams\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"9\",\"name\":\"Maria Wonderland\",\"email\":\"maria@demo.com\",\"phone\":\"123456790\",\"institution\":\"Test-Inst-CA\",\"district\":\"ABC School District\\t\",\"state\":\"California\",\"country\":\"United Kingdom\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"2 feb\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"Texas, US\",\"title\":\"Compliance Manager\",\"birthday\":\"03/06/1991\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack gjdfj\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Carolyn Hanson\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Carolyn Hanson\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"10\",\"name\":\"Sayali B\",\"email\":\"sayali999@yopmail.com\",\"phone\":\"123456790\",\"institution\":\"Sun university\\t\",\"district\":\"Maharashtra\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"2\",\"classess\":\"1\",\"created_date\":\"3 feb\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"Texas, US\",\"title\":\"Compliance Manager\",\"birthday\":\"03/06/1991\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack ghj\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Brittany Hale\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Brittany Hale\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]}],\"total\":15}",
            "response": "{\"data\":[{\"id\":\"1\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"institution\":\"JJ School of Arts\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"22 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"2\",\"name\":\"Cristina Magistrado\",\"email\":\"Cristina.Magistrado@yopmail.com\",\"phone\":\"9922918546\",\"institution\":\"Readability Academy\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"2\",\"books\":\"25\",\"classess\":\"1\",\"created_date\":\"23 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Software Engineer\",\"birthday\":\"03/02/1984\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"institution\":\"JJ School of Arts\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"23 jan,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"3\",\"name\":\"Vimal Patel\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"9922918546\",\"institution\":\"Shanu Patel School\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"25 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"UI/UX Designer\",\"birthday\":\"07/11/1987\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Ron Vargas\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Ron Vargas\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"4\",\"name\":\"Vimal Patel\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"1234786790\",\"institution\":\"Vimal Patel School\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"26 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"HR Executive\",\"birthday\":\"07/11/1987\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Luke Cook\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Luke Cook\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"5\",\"name\":\"Malvika Tambe\",\"email\":\"malvikatambe123@yopmail.com\",\"phone\":\"123456790\",\"institution\":\"Vimal Patel School\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"27 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Frontend Developer\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack kk\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Joyce Freeman\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Joyce Freeman\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"6\",\"name\":\"latifa\",\"email\":\"latifa@yopmail.com\",\"phone\":\"123456789\",\"institution\":\"UK public school\",\"district\":\"dorset\",\"state\":\"dorset\",\"country\":\"United Kingdom\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"28 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"London, UK\",\"title\":\"Compliance Manager\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack jjjjjjj\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Samantha Phillips\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Samantha Phillips\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"7\",\"name\":\"Malvika T\",\"email\":\"malvika123@yopmail.com\",\"phone\":\"123456790\",\"institution\":\"Downlands Community Primary School\",\"district\":\"dorset\",\"state\":\"dorset\",\"country\":\"United Kingdom\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"29 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"London, UK\",\"title\":\"Compliance Manager\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack fghgfh\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Tara Fletcher\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Tara Fletcher\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"8\",\"name\":\"Anushka Sharma \",\"email\":\"anushka.sharma@demo.com\",\"phone\":\"123456790\",\"institution\":\"UK public school\\t\",\"district\":\"dorset\",\"state\":\"dorset\",\"country\":\"United Kingdom\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"30 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"London, UK\",\"title\":\"Compliance Manager\",\"birthday\":\"17/11/1993\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack kkk\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Frederick Adams\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Frederick Adams\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"9\",\"name\":\"Maria Wonderland\",\"email\":\"maria@demo.com\",\"phone\":\"123456790\",\"institution\":\"Test-Inst-CA\",\"district\":\"ABC School District\\t\",\"state\":\"California\",\"country\":\"United Kingdom\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"2 feb\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"Texas, US\",\"title\":\"Compliance Manager\",\"birthday\":\"03/06/1991\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack gjdfj\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Carolyn Hanson\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Carolyn Hanson\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"10\",\"name\":\"Sayali B\",\"email\":\"sayali999@yopmail.com\",\"phone\":\"123456790\",\"institution\":\"Sun university\\t\",\"district\":\"Maharashtra\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"2\",\"classess\":\"1\",\"created_date\":\"3 feb\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"Texas, US\",\"title\":\"Compliance Manager\",\"birthday\":\"03/06/1991\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"item\":\"Mock premium pack ghj\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1636790880},{\"id\":\"#32234\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1634090880},{\"id\":\"#31354\",\"item\":\"Business board pro subscription\",\"status\":\"paid\",\"amount\":59.9,\"date\":1631532800}],\"paymentMethod\":[{\"cardHolderName\":\"Brittany Hale\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Brittany Hale\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]}],\"total\":15}",
            "responseXML": null,
            "responseURL": "/api/crm/teachers",
            "sendFlag": true,
            "timeout": 60000,
            "sendArguments": {
                "0": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"filterData\":{\"status\":\"\"}}"
            },
            "errorFlag": false,
            "params": {},
            "queryParams": {},
            "responseHeaders": {
                "Content-Type": "application/json"
            }
        }
    }
    return responseData?.data
   // return response.data
})
export const getBooks = createAsyncThunk('crmCustomers/data/getBooks',async (params) => {
   // const response = await getBooksList(params)
   // console.log('book response',response);
   const respdata={
    "data": {
        "data": [
            {
                "id": "1",
                "name": "mamta",
                "level": "1-1",
                "comprehension": "2/2",
                "question": "1",
                "chapters": "15",
                "voabulary": "0",
                "words": "428",
                "bookImage": "/img/books/6a560996-4858-4c6f-ab3f-43e23e881b6c.jpeg",
                "email": "mamtafromjj@yopmail.com",
                "bookName": "Yasmin the Chef",
                "grade": "1",
                "bookAuthor": "Capstone",
                "district": "Pune",
                "arscore": "1",
                "state": "Maharashtra",
                "country": "India",
                "student": "1",
                "books": "0",
                "classess": "1",
                "created_date": "22 jan",
                "img": "",
                "role": "Admin",
                "lastOnline": 1623430400,
                "status": "active"
            },
            {
                "id": "2",
                "words": "4",
                "voabulary": "1",
                "comprehension": "3/2",
                "level": "-",
                "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                "name": "Cristina Magistrado",
                "grade": "1",
                "chapters": "16",
                "question": "1",
                "email": "Cristina.Magistrado@yopmail.com",
                "phone": "9922918546",
                "bookName": "Pedro Goes Wild!",
                "bookAuthor": "Capstone",
                "district": "Pune",
                "arscore": "1",
                "state": "Maharashtra",
                "country": "India",
                "student": "2",
                "books": "25",
                "classess": "1",
                "created_date": "23 jan",
                "img": "",
                "role": "Admin",
                "lastOnline": 1623430400,
                "status": "active"
            },
            {
                "id": "3",
                "name": "Vimal Patel",
                "chapters": "15",
                "words": "4325",
                "voabulary": "0",
                "question": "2",
                "comprehension": "2/2",
                "level": "-",
                "arscore": "1",
                "bookAuthor": "Capstone",
                "grade": "K",
                "email": "vimalpatel19122022_1@yopmail.com",
                "phone": "9922918546",
                "bookImage": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                "bookName": "The Haunted Backpack",
                "district": "Pune",
                "state": "Maharashtra",
                "country": "India",
                "student": "0",
                "books": "0",
                "classess": "0",
                "created_date": "25 jan",
                "img": "",
                "role": "Admin",
                "lastOnline": 1623430400,
                "status": "active"
            },
            {
                "id": "4",
                "bookImage": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                "question": "1",
                "arscore": "1",
                "chapters": "12",
                "comprehension": "3/2",
                "level": "-",
                "voabulary": "0",
                "email": "vimalpatel19122022_1@yopmail.com",
                "phone": "1234786790",
                "grade": "5",
                "words": "4325",
                "bookAuthor": "Capstone",
                "bookName": "Yasmin the Chef",
                "district": "Pune",
                "state": "Maharashtra",
                "country": "India",
                "student": "0",
                "books": "0",
                "classess": "0",
                "created_date": "26 jan",
                "img": "",
                "role": "Admin",
                "lastOnline": 1623430400,
                "status": "active"
            }
        ],
        "total": 4
    },
    "status": 201,
    "statusText": "Created",
    "headers": {
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 60000,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {
            "FormData": null
        },
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
        },
        "baseURL": "/api",
        "url": "/crm/books",
        "method": "post",
        "data": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"filterData\":{\"status\":\"\"}}"
    },
    "request": {
        "_eventListeners": {
            "loadend": [
                null
            ],
            "abort": [
                null
            ],
            "load": [
                null
            ],
            "progress": [
                null
            ],
            "loadstart": [
                null
            ]
        },
        "readyState": 4,
        "requestHeaders": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
        },
        "requestBody": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"filterData\":{\"status\":\"\"}}",
        "status": 201,
        "statusText": "Created",
        "upload": {
            "_eventListeners": {
                "loadend": [
                    null
                ],
                "abort": [
                    null
                ],
                "load": [
                    null
                ],
                "progress": [
                    null
                ],
                "loadstart": [
                    null
                ]
            }
        },
        "onload": null,
        "onloadstart": null,
        "onprogress": null,
        "onreadystatechange": null,
        "method": "POST",
        "url": "/api/crm/books",
        "async": true,
        "responseText": "{\"data\":[{\"id\":\"1\",\"name\":\"mamta\",\"level\":\"1-1\",\"comprehension\":\"2/2\",\"question\":\"1\",\"chapters\":\"15\",\"voabulary\":\"0\",\"words\":\"428\",\"bookImage\":\"/img/books/6a560996-4858-4c6f-ab3f-43e23e881b6c.jpeg\",\"email\":\"mamtafromjj@yopmail.com\",\"bookName\":\"Yasmin the Chef\",\"grade\":\"1\",\"bookAuthor\":\"Capstone\",\"district\":\"Pune\",\"arscore\":\"1\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"22 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"2\",\"words\":\"4\",\"voabulary\":\"1\",\"comprehension\":\"3/2\",\"level\":\"-\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"name\":\"Cristina Magistrado\",\"grade\":\"1\",\"chapters\":\"16\",\"question\":\"1\",\"email\":\"Cristina.Magistrado@yopmail.com\",\"phone\":\"9922918546\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"district\":\"Pune\",\"arscore\":\"1\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"2\",\"books\":\"25\",\"classess\":\"1\",\"created_date\":\"23 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"3\",\"name\":\"Vimal Patel\",\"chapters\":\"15\",\"words\":\"4325\",\"voabulary\":\"0\",\"question\":\"2\",\"comprehension\":\"2/2\",\"level\":\"-\",\"arscore\":\"1\",\"bookAuthor\":\"Capstone\",\"grade\":\"K\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"9922918546\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"bookName\":\"The Haunted Backpack\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"25 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"4\",\"bookImage\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"question\":\"1\",\"arscore\":\"1\",\"chapters\":\"12\",\"comprehension\":\"3/2\",\"level\":\"-\",\"voabulary\":\"0\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"1234786790\",\"grade\":\"5\",\"words\":\"4325\",\"bookAuthor\":\"Capstone\",\"bookName\":\"Yasmin the Chef\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"26 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"total\":4}",
        "response": "{\"data\":[{\"id\":\"1\",\"name\":\"mamta\",\"level\":\"1-1\",\"comprehension\":\"2/2\",\"question\":\"1\",\"chapters\":\"15\",\"voabulary\":\"0\",\"words\":\"428\",\"bookImage\":\"/img/books/6a560996-4858-4c6f-ab3f-43e23e881b6c.jpeg\",\"email\":\"mamtafromjj@yopmail.com\",\"bookName\":\"Yasmin the Chef\",\"grade\":\"1\",\"bookAuthor\":\"Capstone\",\"district\":\"Pune\",\"arscore\":\"1\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"1\",\"books\":\"0\",\"classess\":\"1\",\"created_date\":\"22 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"2\",\"words\":\"4\",\"voabulary\":\"1\",\"comprehension\":\"3/2\",\"level\":\"-\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"name\":\"Cristina Magistrado\",\"grade\":\"1\",\"chapters\":\"16\",\"question\":\"1\",\"email\":\"Cristina.Magistrado@yopmail.com\",\"phone\":\"9922918546\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"district\":\"Pune\",\"arscore\":\"1\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"2\",\"books\":\"25\",\"classess\":\"1\",\"created_date\":\"23 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"3\",\"name\":\"Vimal Patel\",\"chapters\":\"15\",\"words\":\"4325\",\"voabulary\":\"0\",\"question\":\"2\",\"comprehension\":\"2/2\",\"level\":\"-\",\"arscore\":\"1\",\"bookAuthor\":\"Capstone\",\"grade\":\"K\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"9922918546\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"bookName\":\"The Haunted Backpack\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"25 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"4\",\"bookImage\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"question\":\"1\",\"arscore\":\"1\",\"chapters\":\"12\",\"comprehension\":\"3/2\",\"level\":\"-\",\"voabulary\":\"0\",\"email\":\"vimalpatel19122022_1@yopmail.com\",\"phone\":\"1234786790\",\"grade\":\"5\",\"words\":\"4325\",\"bookAuthor\":\"Capstone\",\"bookName\":\"Yasmin the Chef\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"student\":\"0\",\"books\":\"0\",\"classess\":\"0\",\"created_date\":\"26 jan\",\"img\":\"\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"total\":4}",
        "responseXML": null,
        "responseURL": "/api/crm/books",
        "sendFlag": true,
        "timeout": 60000,
        "sendArguments": {
            "0": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"filterData\":{\"status\":\"\"}}"
        },
        "errorFlag": false,
        "params": {},
        "queryParams": {},
        "responseHeaders": {
            "Content-Type": "application/json"
        }
    }
}
return respdata.data;
   // return response.data
})
export const getReport = createAsyncThunk('crmCustomers/data/getReport',async (params) => {
   
   //const response = await getReportList(params)
   // console.log('report response',response);
   const responseData={
    "data": [
        {
            "id": "1",
            "name": "Teacher - Marcela DeVivo",
            "reader": "",
            "books": "118",
            "total": "2",
            "onplatform": "0",
            "notOnPlatform": "0",
            "active": "2",
            "notActive": "0",
            "minutesRead": "1918",
            "averageAccuracy": "80,3%",
            "comprehension": "75.9%",
            "speed": "85",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "2",
            "name": "Teacher - Chloe Laughllin",
            "reader": "",
            "books": "109",
            "total": "2",
            "onplatform": "2",
            "notOnPlatform": "0",
            "active": "2",
            "notActive": "0",
            "minutesRead": "1025",
            "averageAccuracy": "80.5%",
            "comprehension": "70.7%",
            "speed": "53",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "3",
            "name": "Teacher - Shriya Jain",
            "reader": "",
            "books": "124",
            "total": "4",
            "onplatform": "4",
            "notOnPlatform": "0",
            "active": "4",
            "notActive": "2",
            "minutesRead": "889",
            "averageAccuracy": "77.9%",
            "comprehension": "78.0%",
            "speed": "76",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "4",
            "name": "Teacher - Cristina Magistrado",
            "reader": "",
            "books": "119",
            "total": "2",
            "onplatform": "0",
            "notOnPlatform": "2",
            "active": "2",
            "notActive": "0",
            "minutesRead": "394",
            "averageAccuracy": "59.8%",
            "comprehension": "76.7%",
            "speed": "64",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "5",
            "name": "Teacher - harshad hansal",
            "reader": "",
            "books": "0",
            "total": "5",
            "onplatform": "0",
            "notOnPlatform": "14",
            "active": "0",
            "notActive": "5",
            "minutesRead": "0",
            "averageAccuracy": "0%",
            "comprehension": "0%",
            "speed": "0",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "6",
            "name": "Teacher - guddi kansal",
            "reader": "",
            "books": "0",
            "total": "3",
            "onplatform": "0",
            "notOnPlatform": "3",
            "active": "0",
            "notActive": "3",
            "minutesRead": "0",
            "averageAccuracy": "0%",
            "comprehension": "0%",
            "speed": "0",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "7",
            "name": "Teacher - Vickey Kansal",
            "reader": "",
            "books": "0",
            "total": "1",
            "onplatform": "0",
            "notOnPlatform": "1",
            "active": "0",
            "notActive": "1",
            "minutesRead": "0",
            "averageAccuracy": "0%",
            "comprehension": "0%",
            "speed": "0",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "8",
            "name": "Teacher - suraj",
            "reader": "",
            "books": "0",
            "total": "27",
            "onplatform": "0",
            "notOnPlatform": "27",
            "active": "0",
            "notActive": "27",
            "minutesRead": "0",
            "averageAccuracy": "0%",
            "comprehension": "0%",
            "speed": "0",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "9",
            "name": "Teacher - Mila Teacher",
            "reader": "",
            "books": "0",
            "total": "7",
            "onplatform": "0",
            "notOnPlatform": "7",
            "active": "0",
            "notActive": "7",
            "minutesRead": "0",
            "averageAccuracy": "0%",
            "comprehension": "0%",
            "speed": "0",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        },
        {
            "id": "10",
            "name": "Teacher - Katrina Teacher",
            "reader": "",
            "books": "0",
            "total": "2",
            "onplatform": "0",
            "notOnPlatform": "2",
            "active": "0",
            "notActive": "2",
            "minutesRead": "0",
            "averageAccuracy": "0%",
            "comprehension": "0%",
            "speed": "0",
            "movedLevelUp": "0",
            "movedLevelDown": "0"
        }
    ],
    "total": 15
}
return responseData;
    //return response.data
})

export const getClass = createAsyncThunk('crmCustomers/data/getClass',async (params) => {
   const responseData=[
    {
        "id": "1",
        "name": "KG",
        "sections": "2",
        "students": "28"
    },
    {
        "id": "2",
        "name": "1 st",
        "sections": "1",
        "students": "6"
    },
    {
        "id": "3",
        "name": "2 nd",
        "sections": "1",
        "students": "8"
    },
    {
        "id": "4",
        "name": "3 rd",
        "sections": "7",
        "students": "77"
    },
    {
        "id": "5",
        "name": "4 th",
        "sections": "3",
        "students": "15"
    },
    {
        "id": "6",
        "name": "5 th",
        "sections": "1",
        "students": "1"
    },
    {
        "id": "7",
        "name": "6 th",
        "sections": "1",
        "students": "1"
    },
    {
        "id": "8",
        "name": "7 th",
        "sections": "2",
        "students": "26"
    },
    {
        "id": "9",
        "name": "8 th",
        "sections": "1",
        "students": "1"
    },
    {
        "id": "10",
        "name": "9 th",
        "sections": "1",
        "students": "6"
    },
    {
        "id": "11",
        "name": "11 th",
        "sections": "1",
        "students": "3"
    },
    {
        "id": "12",
        "name": "PRE-K",
        "sections": "5",
        "students": "18"
    },
    {
        "id": "13",
        "name": "KG",
        "sections": "2",
        "students": "28"
    },
    {
        "id": "14",
        "name": "PRE-K",
        "sections": "4",
        "students": "20"
    },
    {
        "id": "15",
        "name": "KG",
        "sections": "2",
        "students": "28"
    }
]
console.log('responseData',responseData);
return responseData;
    //const response = await getClassesslist(params)
 //console.log('class response',response);
   // return response.data
})

export const getProjectDashboardData = createAsyncThunk('crmCustomers/data/getProjectDashboardData',async () => {
    const response = await apiGetProjectDashboardData()
    console.log('response>>>',response);
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

export const getReporttatistic = createAsyncThunk('crmCustomers/data/getReportStatistic',async () => {
    const response = await apiGetCrmCustomersStatistic()
    return response.data
})


export const getCustomers = createAsyncThunk('crmCustomers/data/getCustomers',async (params) => {
   // console.log( " >>>>> instr=itution slice ")
   const responseData={
    "data": {
        "data": [
            {
                "id": "1",
                "name": "Namrata ",
                "teacherphone": "+91 98903 54960",
                "email": "namratapotdaraaaaaaa@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-10.jpg",
                "imgAlt": "/img/avatars/jj.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "title": "I Can Climb!",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
                        "summary_date": "30JUN,2022",
                        "comprehension": "2/2",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#34283",
                        "title": "Car Race",
                        "comprehension": "3/3",
                        "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
                        "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
                        "summary_date": "7 jAN,2022",
                        "start": "05:23 AM",
                        "finish": "05:26 AM",
                        "duration": "3 min(s)",
                        "accuracy": "79.33%",
                        "wpm": "0",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#32234",
                        "comprehension": "1/1",
                        "title": "Alphi Blows Bubbles",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "by Tony J Moon",
                        "summary_date": "5 JUN,2022",
                        "start": "02:20 AM",
                        "finish": "02:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "54.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#31354",
                        "title": "Finbo",
                        "comprehension": "1/2",
                        "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                        "author": "Written & Illustrated by Janaki Sooriyarachchi",
                        "summary_date": "30JUN,2022",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
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
                "name": "sahas",
                "email": "sahas@yopmail.com",
                "teachername": "Whitecotton",
                "institution": "Sun university",
                "book": "Pedro Goes Wild!",
                "bookImage": "Capstone",
                "bookAuthor": "Capstone",
                "instittuteph": "9960221626",
                "teacheremail": "whitecotton123@yopmail.com",
                "teacherphone": "9552559052",
                "books": "0",
                "age": "4 yrs",
                "grade": "3",
                "class": "2",
                "reading_shedule": "10 Min(s)/Day @ 10:30 PM",
                "signup_date": "before 2h 55min",
                "img": "/img/avatars/thumb-3.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "title": "I Can Climb!",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
                        "summary_date": "30JUN,2022",
                        "comprehension": "2/2",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#34283",
                        "title": "Car Race",
                        "comprehension": "3/3",
                        "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
                        "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
                        "summary_date": "7 jAN,2022",
                        "start": "05:23 AM",
                        "finish": "05:26 AM",
                        "duration": "3 min(s)",
                        "accuracy": "79.33%",
                        "wpm": "0",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#32234",
                        "comprehension": "1/1",
                        "title": "Alphi Blows Bubbles",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "by Tony J Moon",
                        "summary_date": "5 JUN,2022",
                        "start": "02:20 AM",
                        "finish": "02:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "54.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#31354",
                        "title": "Finbo",
                        "comprehension": "1/2",
                        "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                        "author": "Written & Illustrated by Janaki Sooriyarachchi",
                        "summary_date": "30JUN,2022",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
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
                "name": "sanika",
                "teacherphone": "+91 98903 54960",
                "email": "sanika@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-7.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "title": "I Can Climb!",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
                        "summary_date": "30JUN,2022",
                        "comprehension": "2/2",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#34283",
                        "title": "Car Race",
                        "comprehension": "3/3",
                        "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
                        "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
                        "summary_date": "7 jAN,2022",
                        "start": "05:23 AM",
                        "finish": "05:26 AM",
                        "duration": "3 min(s)",
                        "accuracy": "79.33%",
                        "wpm": "0",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#32234",
                        "comprehension": "1/1",
                        "title": "Alphi Blows Bubbles",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "by Tony J Moon",
                        "summary_date": "5 JUN,2022",
                        "start": "02:20 AM",
                        "finish": "02:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "54.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#31354",
                        "title": "Finbo",
                        "comprehension": "1/2",
                        "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                        "author": "Written & Illustrated by Janaki Sooriyarachchi",
                        "summary_date": "30JUN,2022",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
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
                "id": "4",
                "name": "haiya ",
                "teacherphone": "+91 98903 54960",
                "email": "haiya@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-4.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "title": "I Can Climb!",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
                        "summary_date": "30JUN,2022",
                        "comprehension": "2/2",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#34283",
                        "title": "Car Race",
                        "comprehension": "3/3",
                        "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
                        "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
                        "summary_date": "7 jAN,2022",
                        "start": "05:23 AM",
                        "finish": "05:26 AM",
                        "duration": "3 min(s)",
                        "accuracy": "79.33%",
                        "wpm": "0",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#32234",
                        "comprehension": "1/1",
                        "title": "Alphi Blows Bubbles",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "by Tony J Moon",
                        "summary_date": "5 JUN,2022",
                        "start": "02:20 AM",
                        "finish": "02:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "54.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#31354",
                        "title": "Finbo",
                        "comprehension": "1/2",
                        "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                        "author": "Written & Illustrated by Janaki Sooriyarachchi",
                        "summary_date": "30JUN,2022",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
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
                "id": "5",
                "name": "sarthak",
                "teacherphone": "+91 98903 54960",
                "email": "sarthak@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-8.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "name": "mamta",
                        "email": "mamtafromjj@yopmail.com",
                        "teachername": "Maria Wonderland",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "teacheremail": "maria@demo.com",
                        "teacherphone": "123456789",
                        "institution": "Test-Inst-CA",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "23 Aust,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#34283",
                        "name": "Namrata",
                        "bookName": "Pedro Goes Wild!",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "KR",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "institution": "Test-Inst-CA",
                        "teacheremail": "kr-06172022@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#32234",
                        "name": "sara",
                        "bookName": "The Haunted Backpack",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg",
                        "email": "sara123@yopmail.com",
                        "teachername": "Sayali B",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "sayali999@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "1",
                        "age": "8 yrs",
                        "student": "2",
                        "grade": "1",
                        "class": "1",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#31354",
                        "name": "Namrata",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "Madhavi",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "madhavi.teacher@yopmail.com",
                        "teacherphone": "9960435534",
                        "books": "3",
                        "age": "8 yrs",
                        "student": "19",
                        "grade": "1",
                        "class": "2",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "25 may,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
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
                "id": "6",
                "name": "manjushri",
                "teacherphone": "+91 98903 54960",
                "email": "manjushri@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-1.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "name": "mamta",
                        "email": "mamtafromjj@yopmail.com",
                        "teachername": "Maria Wonderland",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "teacheremail": "maria@demo.com",
                        "teacherphone": "123456789",
                        "institution": "Test-Inst-CA",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "23 Aust,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#34283",
                        "name": "Namrata",
                        "bookName": "Pedro Goes Wild!",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "KR",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "institution": "Test-Inst-CA",
                        "teacheremail": "kr-06172022@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#32234",
                        "name": "sara",
                        "bookName": "The Haunted Backpack",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg",
                        "email": "sara123@yopmail.com",
                        "teachername": "Sayali B",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "sayali999@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "1",
                        "age": "8 yrs",
                        "student": "2",
                        "grade": "1",
                        "class": "1",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#31354",
                        "name": "Namrata",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "Madhavi",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "madhavi.teacher@yopmail.com",
                        "teacherphone": "9960435534",
                        "books": "3",
                        "age": "8 yrs",
                        "student": "19",
                        "grade": "1",
                        "class": "2",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "25 may,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
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
                "id": "7",
                "name": "SweetyJo",
                "teacherphone": "+91 98903 54960",
                "email": "SweetyJo@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-5.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "name": "mamta",
                        "email": "mamtafromjj@yopmail.com",
                        "teachername": "Maria Wonderland",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "teacheremail": "maria@demo.com",
                        "teacherphone": "123456789",
                        "institution": "Test-Inst-CA",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "23 Aust,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#34283",
                        "name": "Namrata",
                        "bookName": "Pedro Goes Wild!",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "KR",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "institution": "Test-Inst-CA",
                        "teacheremail": "kr-06172022@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#32234",
                        "name": "sara",
                        "bookName": "The Haunted Backpack",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg",
                        "email": "sara123@yopmail.com",
                        "teachername": "Sayali B",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "sayali999@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "1",
                        "age": "8 yrs",
                        "student": "2",
                        "grade": "1",
                        "class": "1",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#31354",
                        "name": "Namrata",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "Madhavi",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "madhavi.teacher@yopmail.com",
                        "teacherphone": "9960435534",
                        "books": "3",
                        "age": "8 yrs",
                        "student": "19",
                        "grade": "1",
                        "class": "2",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "25 may,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
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
                "id": "8",
                "name": "MeriJo",
                "teacherphone": "+91 98903 54960",
                "email": "MeriJo@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-9.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "title": "I Can Climb!",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
                        "summary_date": "30JUN,2022",
                        "comprehension": "2/2",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#34283",
                        "title": "Car Race",
                        "comprehension": "3/3",
                        "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
                        "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
                        "summary_date": "7 jAN,2022",
                        "start": "05:23 AM",
                        "finish": "05:26 AM",
                        "duration": "3 min(s)",
                        "accuracy": "79.33%",
                        "wpm": "0",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#32234",
                        "comprehension": "1/1",
                        "title": "Alphi Blows Bubbles",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "by Tony J Moon",
                        "summary_date": "5 JUN,2022",
                        "start": "02:20 AM",
                        "finish": "02:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "54.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#31354",
                        "title": "Finbo",
                        "comprehension": "1/2",
                        "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                        "author": "Written & Illustrated by Janaki Sooriyarachchi",
                        "summary_date": "30JUN,2022",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
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
                "id": "9",
                "name": "aratika",
                "teacherphone": "+91 98903 54960",
                "email": "aratika@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-1.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "title": "I Can Climb!",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "Author: Mini Shrinivasan Illustrator: Deval Maniar",
                        "summary_date": "30JUN,2022",
                        "comprehension": "2/2",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#34283",
                        "title": "Car Race",
                        "comprehension": "3/3",
                        "img": "/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg",
                        "author": "Written by: Chloe Laughlin, Illustrated by: Colson Timblin",
                        "summary_date": "7 jAN,2022",
                        "start": "05:23 AM",
                        "finish": "05:26 AM",
                        "duration": "3 min(s)",
                        "accuracy": "79.33%",
                        "wpm": "0",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#32234",
                        "comprehension": "1/1",
                        "title": "Alphi Blows Bubbles",
                        "img": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "author": "by Tony J Moon",
                        "summary_date": "5 JUN,2022",
                        "start": "02:20 AM",
                        "finish": "02:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "54.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
                    },
                    {
                        "id": "#31354",
                        "title": "Finbo",
                        "comprehension": "1/2",
                        "img": "/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg",
                        "author": "Written & Illustrated by Janaki Sooriyarachchi",
                        "summary_date": "30JUN,2022",
                        "start": "07:20 AM",
                        "finish": "07:22 AM",
                        "duration": "2 min(s)",
                        "accuracy": "96.09%",
                        "wpm": "54",
                        "vocabulary": "3",
                        "status": "pending",
                        "amount": 39.9,
                        "date": 1639132800
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
                "id": "10",
                "name": "advika",
                "teacherphone": "+91 98903 54960",
                "email": "advika@yopmail.com",
                "teachername": "mamta",
                "instituteemail": "jj.s11@yopmail.com",
                "institution": "JJ School of Arts",
                "instittuteph": "9960221626",
                "teacheremail": "mamtafromjj@yopmail.com",
                "books": "0",
                "age": "8 yrs",
                "grade": "pre-k",
                "class": "carolyn_h@hotmail.com",
                "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                "signup_date": "today",
                "img": "/img/avatars/thumb-15.jpg",
                "role": "Admin",
                "lastOnline": 1623430400,
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
                        "name": "mamta",
                        "email": "mamtafromjj@yopmail.com",
                        "teachername": "Maria Wonderland",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "teacheremail": "maria@demo.com",
                        "teacherphone": "123456789",
                        "institution": "Test-Inst-CA",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "23 Aust,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#34283",
                        "name": "Namrata",
                        "bookName": "Pedro Goes Wild!",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "KR",
                        "district": "PABC School District\tune",
                        "state": "California",
                        "country": "United States",
                        "institution": "Test-Inst-CA",
                        "teacheremail": "kr-06172022@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "0",
                        "age": "8 yrs",
                        "student": "0",
                        "grade": "0",
                        "class": "0",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#32234",
                        "name": "sara",
                        "bookName": "The Haunted Backpack",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg",
                        "email": "sara123@yopmail.com",
                        "teachername": "Sayali B",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "sayali999@yopmail.com",
                        "teacherphone": "123456789",
                        "books": "1",
                        "age": "8 yrs",
                        "student": "2",
                        "grade": "1",
                        "class": "1",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "17 jun,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
                    },
                    {
                        "id": "#31354",
                        "name": "Namrata",
                        "bookName": "Yasmin the Chef",
                        "bookAuthor": "Capstone",
                        "bookImage": "/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg",
                        "email": "namratapotdaraaaaaaa@yopmail.com",
                        "teachername": "Madhavi",
                        "district": "Pune",
                        "state": "Maharashtra",
                        "country": "India",
                        "institution": "Sun university",
                        "teacheremail": "madhavi.teacher@yopmail.com",
                        "teacherphone": "9960435534",
                        "books": "3",
                        "age": "8 yrs",
                        "student": "19",
                        "grade": "1",
                        "class": "2",
                        "reading_shedule": "20 Min(s)/Day @ 10:30 PM",
                        "signup_date": "25 may,2022",
                        "img": "/img/avatars/thumb-1.jpg",
                        "lastOnline": 1623430400,
                        "status": "active"
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
            }
        ],
        "total": 17
    },
    "status": 201,
    "statusText": "Created",
    "headers": {
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 60000,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {
            "FormData": null
        },
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
        },
        "baseURL": "/api",
        "url": "/crm/customers",
        "method": "post",
        "data": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"studentFilterData\":{\"status\":\"\"}}"
    },
    "request": {
        "_eventListeners": {
            "loadend": [
                null
            ],
            "abort": [
                null
            ],
            "load": [
                null
            ],
            "progress": [
                null
            ],
            "loadstart": [
                null
            ]
        },
        "readyState": 4,
        "requestHeaders": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
        },
        "requestBody": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"studentFilterData\":{\"status\":\"\"}}",
        "status": 201,
        "statusText": "Created",
        "upload": {
            "_eventListeners": {
                "loadend": [
                    null
                ],
                "abort": [
                    null
                ],
                "load": [
                    null
                ],
                "progress": [
                    null
                ],
                "loadstart": [
                    null
                ]
            }
        },
        "onload": null,
        "onloadstart": null,
        "onprogress": null,
        "onreadystatechange": null,
        "method": "POST",
        "url": "/api/crm/customers",
        "async": true,
        "responseText": "{\"data\":[{\"id\":\"1\",\"name\":\"Namrata \",\"teacherphone\":\"+91 98903 54960\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-10.jpg\",\"imgAlt\":\"/img/avatars/jj.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"2\",\"name\":\"sahas\",\"email\":\"sahas@yopmail.com\",\"teachername\":\"Whitecotton\",\"institution\":\"Sun university\",\"book\":\"Pedro Goes Wild!\",\"bookImage\":\"Capstone\",\"bookAuthor\":\"Capstone\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"whitecotton123@yopmail.com\",\"teacherphone\":\"9552559052\",\"books\":\"0\",\"age\":\"4 yrs\",\"grade\":\"3\",\"class\":\"2\",\"reading_shedule\":\"10 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"before 2h 55min\",\"img\":\"/img/avatars/thumb-3.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Software Engineer\",\"birthday\":\"03/02/1984\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"3\",\"name\":\"sanika\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"sanika@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-7.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"4\",\"name\":\"haiya \",\"teacherphone\":\"+91 98903 54960\",\"email\":\"haiya@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-4.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"5\",\"name\":\"sarthak\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"sarthak@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-8.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"6\",\"name\":\"manjushri\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"manjushri@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"7\",\"name\":\"SweetyJo\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"SweetyJo@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-5.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"8\",\"name\":\"MeriJo\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"MeriJo@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-9.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"9\",\"name\":\"aratika\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"aratika@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"10\",\"name\":\"advika\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"advika@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-15.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]}],\"total\":17}",
        "response": "{\"data\":[{\"id\":\"1\",\"name\":\"Namrata \",\"teacherphone\":\"+91 98903 54960\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-10.jpg\",\"imgAlt\":\"/img/avatars/jj.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"2\",\"name\":\"sahas\",\"email\":\"sahas@yopmail.com\",\"teachername\":\"Whitecotton\",\"institution\":\"Sun university\",\"book\":\"Pedro Goes Wild!\",\"bookImage\":\"Capstone\",\"bookAuthor\":\"Capstone\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"whitecotton123@yopmail.com\",\"teacherphone\":\"9552559052\",\"books\":\"0\",\"age\":\"4 yrs\",\"grade\":\"3\",\"class\":\"2\",\"reading_shedule\":\"10 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"before 2h 55min\",\"img\":\"/img/avatars/thumb-3.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Software Engineer\",\"birthday\":\"03/02/1984\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHolderName\":\"Terrance Moreno\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"3\",\"name\":\"sanika\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"sanika@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-7.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"4\",\"name\":\"haiya \",\"teacherphone\":\"+91 98903 54960\",\"email\":\"haiya@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-4.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"5\",\"name\":\"sarthak\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"sarthak@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-8.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"6\",\"name\":\"manjushri\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"manjushri@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"7\",\"name\":\"SweetyJo\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"SweetyJo@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-5.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"8\",\"name\":\"MeriJo\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"MeriJo@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-9.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"9\",\"name\":\"aratika\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"aratika@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-1.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]},{\"id\":\"10\",\"name\":\"advika\",\"teacherphone\":\"+91 98903 54960\",\"email\":\"advika@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-15.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"name\":\"mamta\",\"email\":\"mamtafromjj@yopmail.com\",\"teachername\":\"Maria Wonderland\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"teacheremail\":\"maria@demo.com\",\"teacherphone\":\"123456789\",\"institution\":\"Test-Inst-CA\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"23 Aust,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#34283\",\"name\":\"Namrata\",\"bookName\":\"Pedro Goes Wild!\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"KR\",\"district\":\"PABC School District\\tune\",\"state\":\"California\",\"country\":\"United States\",\"institution\":\"Test-Inst-CA\",\"teacheremail\":\"kr-06172022@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"0\",\"age\":\"8 yrs\",\"student\":\"0\",\"grade\":\"0\",\"class\":\"0\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#32234\",\"name\":\"sara\",\"bookName\":\"The Haunted Backpack\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/bbe62243-c063-4843-ac42-3884cc8a31d3.jpeg\",\"email\":\"sara123@yopmail.com\",\"teachername\":\"Sayali B\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"sayali999@yopmail.com\",\"teacherphone\":\"123456789\",\"books\":\"1\",\"age\":\"8 yrs\",\"student\":\"2\",\"grade\":\"1\",\"class\":\"1\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"17 jun,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"},{\"id\":\"#31354\",\"name\":\"Namrata\",\"bookName\":\"Yasmin the Chef\",\"bookAuthor\":\"Capstone\",\"bookImage\":\"/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"Madhavi\",\"district\":\"Pune\",\"state\":\"Maharashtra\",\"country\":\"India\",\"institution\":\"Sun university\",\"teacheremail\":\"madhavi.teacher@yopmail.com\",\"teacherphone\":\"9960435534\",\"books\":\"3\",\"age\":\"8 yrs\",\"student\":\"19\",\"grade\":\"1\",\"class\":\"2\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"25 may,2022\",\"img\":\"/img/avatars/thumb-1.jpg\",\"lastOnline\":1623430400,\"status\":\"active\"}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]}],\"total\":17}",
        "responseXML": null,
        "responseURL": "/api/crm/customers",
        "sendFlag": true,
        "timeout": 60000,
        "sendArguments": {
            "0": "{\"pageIndex\":1,\"pageSize\":10,\"sort\":{\"order\":\"\",\"key\":\"\"},\"query\":\"\",\"studentFilterData\":{\"status\":\"\"}}"
        },
        "errorFlag": false,
        "params": {},
        "queryParams": {},
        "responseHeaders": {
            "Content-Type": "application/json"
        }
    }
}
return responseData?.data
   // const response = await apiGetCrmCustomers(params)
   // return response.data
})
export const getCustomerBooks = createAsyncThunk('crmCustomers/data/getCustomerBooks',async (params) => {
    // console.log( " >>>>> instr=itution slice ")
     const response = await apiGetCrmCustomerBooks(params)
     
     console.log('response',response);
     return response.data
 })

export const putCustomer = createAsyncThunk('crmCustomers/data/putCustomer',async (data) => {
    const response = await apPutCrmCustomer(data)
    return response.data
})

export const deleteCustomer = createAsyncThunk('crmCustomerDetails/data/deleteCustomer',async (data) => {
    const response = await apiDeleteCrmCustomer(data)
    return response.data
})

export const getCustomer = createAsyncThunk('crmCustomerDetails/data/getCustomer',async (data) => {
   // console.log('tttttt');
    const response = await apiGetCrmCustomerDetails(data)
 
    return response.data
})


export const initialTableData = {
    total: 15,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: ''
    }
}

export const initialStudenTableData = {
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

export const initialStudentFilterData = {
    status: '',
}

const readabilitySlice = createSlice({
    name: 'readability',
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

        studentTableData: initialStudenTableData,
        studentFilterData: initialStudentFilterData,

        dashboardData: {},
        institutionList: [
        ],
        teachersList:  [],
        reportList: [
            {
                id: '1',
                name: 'Teacher - Marcela DeVivo',
                reader:'',
                books:'118',
                total: '2',
                onplatform:'0',
                notOnPlatform:'0',
                active:'2',
                notActive:'0',
                minutesRead:'1918',
                averageAccuracy:'80,3%',
                comprehension:'75.9%',
                speed:'85',
                movedLevelUp:'0',
                movedLevelDown:'0'
        
                
            },
            {
                id: '2',
                name: 'Teacher - Chloe Laughllin',
                reader:'',
                books:'109',
                total: '2',
                onplatform:'2',
                notOnPlatform:'0',
                active:'2',
                notActive:'0',
                minutesRead:'1025',
                averageAccuracy:'80.5%',
                comprehension:'70.7%',
                speed:'53',
                movedLevelUp:'0',
                movedLevelDown:'0'
                
            },
            {
                id: '3',
                name: 'Teacher - Shriya Jain',
                reader:'',
                books:'124',
                total: '4',
                onplatform:'4',
                notOnPlatform:'0',
                active:'4',
                notActive:'2',
                minutesRead:'889',
                averageAccuracy:'77.9%',
                comprehension:'78.0%',
                speed:'76',
                movedLevelUp:'0',
                movedLevelDown:'0'
                
            },
            {
                id: '4',
                name: 'Teacher - Cristina Magistrado',
                reader:'',
                books:'119',
                total: '2',
                onplatform:'0',
                notOnPlatform:'2',
                active:'2',
                notActive:'0',
                minutesRead:'394',
                averageAccuracy:'59.8%',
                comprehension:'76.7%',
                speed:'64',
                movedLevelUp:'0',
                movedLevelDown:'0'
            
            },
            {
                id: '5',
                name: 'Teacher - harshad hansal',
                reader:'',
                books:'0',
                total: '5',
                onplatform:'0',
                notOnPlatform:'14',
                active:'0',
                notActive:'5',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0'
                
            },
            {
                id: '6',
                name: 'Teacher - guddi kansal',
                reader:'',
                books:'0',
                total: '3',
                onplatform:'0',
                notOnPlatform:'3',
                active:'0',
                notActive:'3',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0'
            
            },
            {
                id: '7',
                name: 'Teacher - Vickey Kansal',
                reader:'',
                books:'0',
                total: '1',
                onplatform:'0',
                notOnPlatform:'1',
                active:'0',
                notActive:'1',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0'
            
            },
            {
                id: '8',
                name: 'Teacher - suraj',
                reader:'',
                books:'0',
                total: '27',
                onplatform:'0',
                notOnPlatform:'27',
                active:'0',
                notActive:'27',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0'
            
            },
            {
                id: '9',
                name: 'Teacher - Mila Teacher',
                reader:'',
                books:'0',
                total: '7',
                onplatform:'0',
                notOnPlatform:'7',
                active:'0',
                notActive:'7',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
                
                
                
        
            },
            {
                id: '10',
                name: 'Teacher - Katrina Teacher',
                reader:'',
                books:'0',
                total: '2',
                onplatform:'0',
                notOnPlatform:'2',
                active:'0',
                notActive:'2',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
            
        
            },
            {
                id: '11',
                name: 'Teacher - KR',
                reader:'',
                books:'0',
                total: '25',
                onplatform:'0',
                notOnPlatform:'25',
                active:'0',
                notActive:'25',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
            
            
                
            },
            {
                id: '12',
                name: 'Teacher - harshad hansal',
                reader:'',
                books:'0',
                total: '25',
                onplatform:'0',
                notOnPlatform:'25',
                active:'0',
                notActive:'25',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
                
            },
            {
                id: '13',
                name: 'Teacher - jayant sir',
                reader:'',
                books:'0',
                total: '8',
                onplatform:'0',
                notOnPlatform:'8',
                active:'0',
                notActive:'8',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
                
            },
            {
                id: '14',
                name: 'Teacher - Kamla',
                reader:'',
                books:'0',
                total: '9',
                onplatform:'0',
                notOnPlatform:'9',
                active:'0',
                notActive:'9',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
                
            },
            {
                id: '15',
                name: 'Teacher - Vinod Sir',
                reader:'',
                books:'0',
                total: '2',
                onplatform:'0',
                notOnPlatform:'2',
                active:'0',
                notActive:'2',
                minutesRead:'0',
                averageAccuracy:'0%',
                comprehension:'0%',
                speed:'0',
                movedLevelUp:'0',
                movedLevelDown:'0',
                
        
            }
        ],
        booksList:  [
            {
                id: '1',
                name: 'mamta',
                level:'1-1',
                comprehension:'2/2',
                question:'1',
                chapters:'15',
                voabulary:'0',
                words:'428',
                bookImage :'/img/books/6a560996-4858-4c6f-ab3f-43e23e881b6c.jpeg',
                email: 'mamtafromjj@yopmail.com',
                bookName: 'Yasmin the Chef',
                grade: '1',
                bookAuthor:'Capstone',
                district: 'Pune',
                arscore:'1',
                state: 'Maharashtra',
                country: 'India',
                student: '1',
                books: '0',
                classess: '1',
                created_date: '22 jan',
                img: '',
                role: 'Admin',
                lastOnline: 1623430400,
                status: 'active',
                
            
            },
            {
                id: '2',
                words:'4',
                voabulary:'1',
                comprehension:'3/2',
                level:'-',
                bookImage :'/img/books/aea93778-8e70-4560-b348-515360fe8021.jpeg',
                name: 'Cristina Magistrado',
                grade: '1',
                chapters:'16',
                question:'1',
                email: 'Cristina.Magistrado@yopmail.com',
                phone : '9922918546',
                bookName: 'Pedro Goes Wild!',
                bookAuthor:'Capstone',
                district: 'Pune',
                arscore:'1',
                state: 'Maharashtra',
                country: 'India',
                student: '2',
                books: '25',
                classess: '1',
                created_date: '23 jan',
                img: '',
                role: 'Admin',
                lastOnline: 1623430400,
                status: 'active',
                    
            },
            {
                id: '3',
                name: 'Vimal Patel',
                chapters:'15',
                words:'4325',
                voabulary:'0',
                question:'2',
                comprehension:'2/2',
                level:'-',
                arscore:'1',
                bookAuthor:'Capstone',
                grade: 'K',
                email: 'vimalpatel19122022_1@yopmail.com',
                phone : '9922918546',
                bookImage :'/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg',
                bookName: 'The Haunted Backpack',
                district: 'Pune',
                state: 'Maharashtra',
                country: 'India',
                student: '0',
                books: '0',
                classess: '0',
                created_date: '25 jan',
                img: '',
                role: 'Admin',
                lastOnline: 1623430400,
                status: 'active',
        
            
            },
            {
                id: '4',
                bookImage :'/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg',
                question:'1',
                arscore:'1',
                chapters:'12',
                comprehension:'3/2',
                level:'-',
                voabulary:'0',
                email: 'vimalpatel19122022_1@yopmail.com',
                phone : '1234786790',
                grade: '5',
                words:'4325',
                bookAuthor:'Capstone',
                bookName: 'Yasmin the Chef',
                district: 'Pune',
                state: 'Maharashtra',
                country: 'India',
                student: '0',
                books: '0',
                classess: '0',
                created_date: '26 jan',
                img: '',
                role: 'Admin',
                lastOnline: 1623430400,
                status: 'active',
            
            },	
            
        ],
        classList:  [
            {
                id: '1',
                name: 'KG',
                sections:'2',
                students:'28'
                
                
            },
            {
                id: '2',
                name: '1 st',
                sections:'1',
                students:'6'
                
            },
            {
                id: '3',
                name: '2 nd',
                sections:'1',
                students:'8'
                
            },
            {
                id: '4',
                name: '3 rd',
                sections:'7',
                students:'77'
            
            },
            {
                id: '5',
                name: '4 th',
                sections:'3',
                students:'15'
                
            },
            {
                id: '6',
                name: '5 th',
                sections:'1',
                students:'1'
            
            },
            {
                id: '7',
                name: '6 th',
                sections:'1',
                students:'1'
            
            },
            {
                id: '8',
                name: '7 th',
                sections:'2',
                students:'26'
            
            },
            {
                id: '9',
                name: '8 th',
                sections:'1',
                students:'1'
                
                
                
        
            },
            {
                id: '10',
               name: '9 th',
                sections:'1',
                students:'6'
            
        
            },
            {
                id: '11',
                name: '11 th',
                sections:'1',
                students:'3'
            
            
                
            },
            {
                id: '12',
                name: 'PRE-K',
                sections:'5',
                students:'18'
                
            },
            {
                id: '13',
                name: 'KG',
                sections:'2',
                students:'28'
                
            },
            {
                id: '14',
                name: 'PRE-K',
                sections:'4',
                students:'20'
                
            },
            {
                id: '15',
                name: 'KG',
                sections:'2',
                students:'28'
                
        
            }
        ],
        profileData: {},
        subscriptionData: [],
        paymentHistoryData: [],
        paymentMethodData: [],
        
        editCustomerBooksDialog: false,
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
      
        
        setStudentTableData: (state, action) => {
            state.studentTableData = action.payload
        },
        setCustomerList: (state, action) => {
            state.customerList = action.payload
        },
        setInsTableData: (state, action) => {
            state.institutionList = action.payload
          // state.institutionList = action.payload
        },
        setTeachersList: (state, action) => {
            state.teachersList = action.payload
        },
        setReportList: (state, action) => {
            state.reportList = action.payload
        },
        setClassList: (state, action) => {
            state.classList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
        setStudentFilterData: (state, action) => {
            state.studentFilterData = action.payload
        },

        updatePaymentMethodData: (state, action) => {
            state.paymentMethodData = action.payload
        },
        updateProfileData: (state, action) => {
            state.profileData = action.payload
        },
        openEditCustomerBooksDialog: (state, action) => {
            state.editCustomerBooksDialog = true
            state.showDrawerInfo = action.payload
            //console.log('state action payload', state.showDrawerInfo);
            //state.type = 'tableContentType'

        },
        closeEditCustomerBooksDialog: (state) => {
            state.editCustomerBooksDialog = false
        },
        updateProfileData: (state, action) => {
            state.profileData = action.payload
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
        state.institutionList = action?.payload?.data
       // console.log('state data',action?.payload?.data);
          // state.tableData.total = action.payload.total
          // console.log('total',action.payload.total);
            state.loading = false
        },
        [getInstitutions.pending]: (state) => {
           // console.log(" >>>>> getInstitutions.pending ");
            state.loading = true
        },
        [getTeachers.fulfilled]: (state, action) => {
            //console.log(" >>>>> getTeachers.fulfilled ", action.payload.data);
            state.teachersList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getReport.fulfilled]: (state, action) => {
         //  console.log(" >>>>> reportlisttt ", action.payload.data);
            state.reportList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },

        [getClass.fulfilled]: (state, action) => {
            //  console.log(" >>>>> reportlisttt ", action.payload.data);
               state.classList = action.payload.data
               state.tableData.total = action.payload.total
               state.loading = false
           },

        [getTeachers.pending]: (state) => {
            state.loading = true
        },
        [getReport.pending]: (state) => {
            state.loading = true
        },
        [getClass.pending]: (state) => {
            state.loading = true
        },
        [getCustomers.fulfilled]: (state, action) => {
           // console.log(" >>>>> getCustomers.fulfilled ", action.payload.data);
            state.customerList = action.payload.data
            state.studentTableData.total = action.payload.total
            state.loading = false
        },
        [getCustomerBooks.fulfilled]: (state, action) => {
            // console.log(" >>>>> getCustomers.fulfilled ", action.payload.data);
             state.paymentHistoryData = action.payload.data
             console.log('action payload',action.payload.data);
             state.studentTableData.total = action.payload.total
             state.loading = false
         },
        [getCustomerBooks.pending]: (state) => {
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
        [deleteCustomer.fulfilled]: () => {},
        [putCustomer.fulfilled]: () => {},
        [getCustomer.pending]: (state) => {
            state.loading = true
        },
        [getCustomer.fulfilled]: (state, action) => {
            state.loading = false
            state.profileData = action.payload
            state.subscriptionData = action.payload?.subscription || []
            state.paymentHistoryData = action.payload?.orderHistory || []
            state.paymentMethodData = action.payload?.paymentMethod || []
        },
    }
})

export const { 
    setTableData,
    setCustomerList,
    setFilterData,
    setInstitutionsList,
    setInsTableData,
    setStudentTableData,
    setStudentFilterData,

    updatePaymentMethodData, 
    updateProfileData,
    openEditCustomerBooksDialog,
    closeEditCustomerBooksDialog
} = readabilitySlice.actions

export default readabilitySlice.reducer
