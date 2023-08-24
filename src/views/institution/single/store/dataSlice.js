import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
    
    apiDeleteCrmCustomer, 
    apPutCrmCustomer,

} from 'services/CrmService'

export const getProjectDashboardData = createAsyncThunk('crmCustomers/data/getProjectDashboardData',async () => {
 
    const responseData={
        "userName": "Carolyn Perkins",
        "taskCount": 5,
        "projectOverviewData": {
            "chart": {
                "daily": {
                    "onGoing": 13,
                    "finished": 9,
                    "total": 21,
                    "series": [
                        {
                            "name": "On Going",
                            "data": [
                                20,
                                19,
                                18,
                                14,
                                12,
                                10
                            ]
                        },
                        {
                            "name": "Finished",
                            "data": [
                                1,
                                4,
                                8,
                                15,
                                16,
                                18
                            ]
                        }
                    ],
                    "range": [
                        "6:00am",
                        "9:00am",
                        "12:00pm",
                        "03:00pm",
                        "06:00pm",
                        "09:00pm"
                    ]
                },
                "weekly": {
                    "onGoing": 126,
                    "finished": 87,
                    "total": 213,
                    "series": [
                        {
                            "name": "On Going",
                            "data": [
                                45,
                                52,
                                68,
                                84,
                                103,
                                112,
                                126
                            ]
                        },
                        {
                            "name": "Finished",
                            "data": [
                                35,
                                41,
                                62,
                                62,
                                75,
                                81,
                                87
                            ]
                        }
                    ],
                    "range": [
                        "21 Jan",
                        "22 Jan",
                        "23 Jan",
                        "24 Jan",
                        "25 Jan",
                        "26 Jan",
                        "27 Jan"
                    ]
                },
                "monthly": {
                    "onGoing": 270,
                    "finished": 113,
                    "total": 383,
                    "series": [
                        {
                            "name": "On Going",
                            "data": [
                                28,
                                52,
                                91,
                                154,
                                227,
                                256,
                                270
                            ]
                        },
                        {
                            "name": "Finished",
                            "data": [
                                22,
                                31,
                                74,
                                88,
                                97,
                                107,
                                113
                            ]
                        }
                    ],
                    "range": [
                        "01 Jan",
                        "05 Jan",
                        "10 Jan",
                        "15 Jan",
                        "20 Jan",
                        "25 Jan",
                        "27 Jan"
                    ]
                }
            }
        },
        "myTasksData": [
            {
                "taskId": "KCM-1393",
                "taskSubject": "Design sign up flow",
                "priority": 0,
                "assignees": [
                    {
                        "id": "1",
                        "name": "Carolyn Perkins",
                        "email": "eileen_h@hotmail.com",
                        "img": "/img/avatars/thumb-1.jpg"
                    },
                    {
                        "id": "2",
                        "name": "Terrance Moreno",
                        "email": "",
                        "img": "/img/avatars/thumb-2.jpg"
                    }
                ]
            },
            {
                "taskId": "KCM-2039",
                "taskSubject": "Update contact page",
                "priority": 1,
                "assignees": [
                    {
                        "id": "1",
                        "name": "Carolyn Perkins",
                        "email": "eileen_h@hotmail.com",
                        "img": "/img/avatars/thumb-1.jpg"
                    }
                ]
            },
            {
                "taskId": "KCM-2155",
                "taskSubject": "Document features 2.0",
                "priority": 1,
                "assignees": [
                    {
                        "id": "1",
                        "name": "Carolyn Perkins",
                        "email": "eileen_h@hotmail.com",
                        "img": "/img/avatars/thumb-1.jpg"
                    },
                    {
                        "id": "2",
                        "name": "Terrance Moreno",
                        "email": "",
                        "img": "/img/avatars/thumb-2.jpg"
                    },
                    {
                        "id": "3",
                        "name": "Ron Vargas",
                        "email": "ronnie_vergas@infotech.io",
                        "img": "/img/avatars/thumb-3.jpg"
                    }
                ]
            },
            {
                "taskId": "KCM-2270",
                "taskSubject": "Fix typo in home page",
                "priority": 2,
                "assignees": [
                    {
                        "id": "1",
                        "name": "Carolyn Perkins",
                        "email": "eileen_h@hotmail.com",
                        "img": "/img/avatars/thumb-1.jpg"
                    },
                    {
                        "id": "5",
                        "name": "Joyce Freeman",
                        "email": "joyce991@infotech.io",
                        "img": "/img/avatars/thumb-5.jpg"
                    }
                ]
            },
            {
                "taskId": "KCM-1957",
                "taskSubject": "Fix broken API",
                "priority": 0,
                "assignees": [
                    {
                        "id": "1",
                        "name": "Carolyn Perkins",
                        "email": "eileen_h@hotmail.com",
                        "img": "/img/avatars/thumb-1.jpg"
                    }
                ]
            }
        ],
        "scheduleData": [
            {
                "id": "0",
                "time": "10:00am",
                "eventName": "Sprint Planning",
                "desciption": "via Zoom",
                "type": "meeting"
            },
            {
                "id": "1",
                "time": "1:00pm",
                "eventName": "Design discussion",
                "desciption": "via Microsoft Teams",
                "type": "meeting"
            },
            {
                "id": "2",
                "time": "3:00pm",
                "eventName": "Create daily report",
                "desciption": "Daily task",
                "type": "task"
            },
            {
                "id": "3",
                "time": "4:00pm",
                "eventName": "MySql online workshop",
                "desciption": "Online workshop",
                "type": "workshop"
            }
        ],
        "projectsData": [
            {
                "id": 27,
                "name": "EVO SaaS",
                "category": "Web Application",
                "desc": "Most of you are familiar with the virtues of a programmer",
                "attachmentCount": 12,
                "totalTask": 32,
                "completedTask": 27,
                "progression": 80,
                "dayleft": 21,
                "status": "none",
                "member": [
                    {
                        "name": "Frederick Adams",
                        "img": "/img/avatars/thumb-8.jpg"
                    },
                    {
                        "name": "Joyce Freeman",
                        "img": "/img/avatars/thumb-5.jpg"
                    },
                    {
                        "name": "Clayton Bates",
                        "img": ""
                    },
                    {
                        "name": "Clayton Bates",
                        "img": ""
                    }
                ]
            },
            {
                "id": 28,
                "name": "AIA Bill App",
                "category": "Mobile Application",
                "desc": "We are not shipping your machine!",
                "attachmentCount": 5,
                "totalTask": 36,
                "completedTask": 15,
                "progression": 45,
                "dayleft": 19,
                "status": "none",
                "member": [
                    {
                        "name": "Carolyn Perkins",
                        "img": "/img/avatars/thumb-1.jpg"
                    },
                    {
                        "name": "Gabriel Frazier",
                        "img": ""
                    }
                ]
            },
            {
                "id": 29,
                "name": "IOP Web",
                "category": "Web Backend Application",
                "desc": "There are two ways to write error-free programs; only the third one works.",
                "attachmentCount": 8,
                "totalTask": 27,
                "completedTask": 19,
                "progression": 73,
                "dayleft": 6,
                "status": "orange",
                "member": [
                    {
                        "name": "Debra Hamilton",
                        "img": ""
                    },
                    {
                        "name": "Stacey Ward",
                        "img": ""
                    },
                    {
                        "name": "Ron Vargas",
                        "img": "/img/avatars/thumb-3.jpg"
                    },
                    {
                        "name": "Ron Vargas",
                        "img": "/img/avatars/thumb-3.jpg"
                    },
                    {
                        "name": "Ron Vargas",
                        "img": "/img/avatars/thumb-3.jpg"
                    },
                    {
                        "name": "Ron Vargas",
                        "img": "/img/avatars/thumb-3.jpg"
                    }
                ]
            },
            {
                "id": 31,
                "name": "Octonine POS",
                "category": "Backend Application",
                "desc": "Everything that can be invented has been invented.",
                "attachmentCount": 8,
                "totalTask": 78,
                "completedTask": 23,
                "progression": 21,
                "dayleft": 52,
                "status": "cyan",
                "member": [
                    {
                        "name": "Brittany Hale",
                        "img": "/img/avatars/thumb-10.jpg"
                    },
                    {
                        "name": "Frederick Adams",
                        "img": "/img/avatars/thumb-8.jpg"
                    },
                    {
                        "name": "Samantha Phillips",
                        "img": "/img/avatars/thumb-6.jpg"
                    },
                    {
                        "name": "Samantha Phillips",
                        "img": "/img/avatars/thumb-6.jpg"
                    },
                    {
                        "name": "Samantha Phillips",
                        "img": "/img/avatars/thumb-6.jpg"
                    }
                ]
            }
        ],
        "activitiesData": [
            {
                "type": "UPDATE-TICKET",
                "dateTime": 1646580000,
                "ticket": "PD-979",
                "status": 0,
                "userName": "Carolyn Perkins",
                "userImg": ""
            },
            {
                "type": "COMMENT",
                "dateTime": 1646578417,
                "userName": "Ron Vargas",
                "userImg": "/img/avatars/thumb-3.jpg",
                "comment": "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like."
            },
            {
                "type": "ADD-TAGS-TO-TICKET",
                "dateTime": 1646574027,
                "userName": "Joyce Freeman",
                "tags": [
                    "Live Issue",
                    "Backend"
                ]
            },
            {
                "type": "ADD-FILES-TO-TICKET",
                "dateTime": 1646569123,
                "userName": "Luke Cook",
                "files": [
                    "document.csv"
                ],
                "ticket": "PD-1092"
            }
        ],
        "id": "1"
    }
 
    return responseData
  
})

export const getCustomer = createAsyncThunk('crmCustomerDetails/data/getCustomer',async (data) => {
    //console.log('lllllllll');
    const responseData={
        "data": {
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
        "status": 200,
        "statusText": "OK",
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
                "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
            },
            "baseURL": "/api",
            "url": "/crm/customer-details",
            "method": "get",
            "params": {
                "id": "1"
            }
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
                "Authorization": "Bearer wVYrxaeNa9OxdnULvde1Au5m5w63"
            },
            "requestBody": null,
            "status": 200,
            "statusText": "OK",
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
            "method": "GET",
            "url": "/api/crm/customer-details?id=1",
            "async": true,
            "responseText": "{\"id\":\"1\",\"name\":\"Namrata \",\"teacherphone\":\"+91 98903 54960\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-10.jpg\",\"imgAlt\":\"/img/avatars/jj.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]}",
            "response": "{\"id\":\"1\",\"name\":\"Namrata \",\"teacherphone\":\"+91 98903 54960\",\"email\":\"namratapotdaraaaaaaa@yopmail.com\",\"teachername\":\"mamta\",\"instituteemail\":\"jj.s11@yopmail.com\",\"institution\":\"JJ School of Arts\",\"instittuteph\":\"9960221626\",\"teacheremail\":\"mamtafromjj@yopmail.com\",\"books\":\"0\",\"age\":\"8 yrs\",\"grade\":\"pre-k\",\"class\":\"carolyn_h@hotmail.com\",\"reading_shedule\":\"20 Min(s)/Day @ 10:30 PM\",\"signup_date\":\"today\",\"img\":\"/img/avatars/thumb-10.jpg\",\"imgAlt\":\"/img/avatars/jj.jpg\",\"role\":\"Admin\",\"lastOnline\":1623430400,\"status\":\"active\",\"personalInfo\":{\"location\":\"New York, US\",\"title\":\"Product Manager\",\"birthday\":\"10/10/1992\",\"phoneNumber\":\"+12-123-1234\",\"facebook\":\"facebook.com/sample\",\"twitter\":\"twitter.com/sample\",\"pinterest\":\"pinterest.com/sample\",\"linkedIn\":\"linkedin/sample\"},\"orderHistory\":[{\"id\":\"#36223\",\"title\":\"I Can Climb!\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"Author: Mini Shrinivasan Illustrator: Deval Maniar\",\"summary_date\":\"30JUN,2022\",\"comprehension\":\"2/2\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#34283\",\"title\":\"Car Race\",\"comprehension\":\"3/3\",\"img\":\"/img/books/e4625426-3493-429e-98d7-c51563e9922d.jpeg\",\"author\":\"Written by: Chloe Laughlin, Illustrated by: Colson Timblin\",\"summary_date\":\"7 jAN,2022\",\"start\":\"05:23 AM\",\"finish\":\"05:26 AM\",\"duration\":\"3 min(s)\",\"accuracy\":\"79.33%\",\"wpm\":\"0\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#32234\",\"comprehension\":\"1/1\",\"title\":\"Alphi Blows Bubbles\",\"img\":\"/img/books/b2df1343-d6fb-405d-b212-283888ed62e6.jpeg\",\"author\":\"by Tony J Moon\",\"summary_date\":\"5 JUN,2022\",\"start\":\"02:20 AM\",\"finish\":\"02:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"54.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800},{\"id\":\"#31354\",\"title\":\"Finbo\",\"comprehension\":\"1/2\",\"img\":\"/img/books/cc5b8f8e-8fb5-4473-8d70-b303299a8308.jpeg\",\"author\":\"Written & Illustrated by Janaki Sooriyarachchi\",\"summary_date\":\"30JUN,2022\",\"start\":\"07:20 AM\",\"finish\":\"07:22 AM\",\"duration\":\"2 min(s)\",\"accuracy\":\"96.09%\",\"wpm\":\"54\",\"vocabulary\":\"3\",\"status\":\"pending\",\"amount\":39.9,\"date\":1639132800}],\"paymentMethod\":[{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"VISA\",\"expMonth\":\"12\",\"expYear\":\"25\",\"last4Number\":\"0392\",\"primary\":true},{\"cardHoldername\":\"Carolyn Perkins\",\"cardType\":\"MASTER\",\"expMonth\":\"06\",\"expYear\":\"25\",\"last4Number\":\"8461\",\"primary\":false}],\"subscription\":[{\"plan\":\"Business board pro\",\"status\":\"active\",\"billing\":\"monthly\",\"nextPaymentDate\":1639132800,\"amount\":59.9}]}",
            "responseXML": null,
            "responseURL": "/api/crm/customer-details?id=1",
            "sendFlag": true,
            "timeout": 60000,
            "sendArguments": {
                "0": null
            },
            "errorFlag": false,
            "params": {},
            "queryParams": {
                "id": "1"
            },
            "responseHeaders": {
                "Content-Type": "application/json"
            }
        }
    }
   
    return responseData
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
