import wildCardSearch from 'utils/wildCardSearch'
import sortBy from 'utils/sortBy'
import paginate from 'utils/paginate'
import { GiCoinsPile } from 'react-icons/gi'

export default function crmFakeApi (server, apiPrefix) {

    server.get(`${apiPrefix}/crm/dashboard`, (schema) => {
        return schema.db.crmDashboardData[0]
    })
    
    server.get(`${apiPrefix}/crm/calendar`, schema => schema.db.eventsData)

    server.post(`${apiPrefix}/crm/customers`, (schema, {requestBody}) => {
        const body = JSON.parse(requestBody)
        const { pageIndex, pageSize, sort, query } = body
        const { order, key } = sort
        const users = schema.db.userDetailData
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
        
        const responseData = {
            data: data,
            total: total
        } 
        return responseData
    })


    server.post(`${apiPrefix}/crm/customerBooks`, (schema, {requestBody}) => {
        const body = JSON.parse(requestBody)
       // console.log('body',body);
        const { pageIndex, pageSize, sort, query,id } = body
        const { order, key } = sort
        const users = schema.db.userDetailData
       // console.log('users',users);
       
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers

        let foundUser = data?.find((item, index)=> {
            console.log(item, index, ">>>> inner");
            return item.id===id;
        
        })
          
        console.log('foundUser',foundUser?.orderHistory);
        data= foundUser?.orderHistory;
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
            console.log('dataaa',data);
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
        
        const responseData = {
            data: data,
            total: total
        } 
       
        return responseData
    })

    server.post(`${apiPrefix}/crm/institutions`, (schema, {requestBody}) => {

        const body = JSON.parse(requestBody)
        const { pageIndex, pageSize, sort, query } = body
        const { order, key } = sort
        const users = schema.db.institutionsDetailData
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
        
        const responseData = {
            data: data,
            total: total
        } 
        return responseData
    })

    server.post(`${apiPrefix}/crm/teachers`, (schema, {requestBody}) => {

        const body = JSON.parse(requestBody)
        const { pageIndex, pageSize, sort, query } = body
        const { order, key } = sort
        const users = schema.db.teachersDetailData
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
        
        const responseData = {
            data: data,
            total: total
        } 
        return responseData
    })


    server.post(`${apiPrefix}/crm/books`, (schema, {requestBody}) => {
       
        const body = JSON.parse(requestBody)
        const { pageIndex, pageSize, sort, query } = body
        const { order, key } = sort
        const users = schema.db.booksDetailData
       
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers
       
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
           
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
      
        const responseData = {
            data: data,
            total: total
        } 
      //console.log('fake apii responseData',responseData);
        return responseData
    })

    server.post(`${apiPrefix}/crm/report`, (schema, {requestBody}) => {

        const body = JSON.parse(requestBody)
        const { pageIndex, pageSize, sort, query } = body
        const { order, key } = sort
        const users = schema.db.reportdata
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
        
        const responseData = {
            data: data,
            total: total
        } 
        return responseData
    })


    server.post(`${apiPrefix}/crm/classess`, (schema, {requestBody}) => {

        const body = JSON.parse(requestBody)
        const { pageIndex, pageSize, sort, query } = body
        const { order, key } = sort
        const users = schema.db.classessdata
        const sanitizeUsers = users.filter(elm => typeof elm !== 'function')
        let data = sanitizeUsers
        let total = users.length

        if (key && order) {
            if(key !== 'lastOnline') {
                data.sort(sortBy(key, order === 'desc' , (a) =>  a.toUpperCase()))
            } else {
                data.sort(sortBy(key, order === 'desc', parseInt))
            }
        }

        if(query) {
            data = wildCardSearch(data, query)
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)
        
        const responseData = {
            data: data,
            total: total
        } 
        return responseData
    })

    server.get(`${apiPrefix}/crm/customers-statistic`, () => {
        return {
            totalCustomers: {
                value: 247,
                growShrink: 17.2
            },
            activeCustomers: {
                value: 50,
                growShrink: 32.7
            },
            newCustomers: {
                value: 24,
                growShrink: -2.3
            }
        }
    })

    server.get(`${apiPrefix}/crm/customer-details`, (schema, {queryParams}) => {
        const id = queryParams.id
        const user = schema.db.userDetailData.find(id)
        return user
    })

    server.del(`${apiPrefix}/crm/customer/delete`, (schema, {requestBody}) => {
        const { id } = JSON.parse(requestBody)
        schema.db.userDetailData.remove({id})
        return {}
    })

    server.put(`${apiPrefix}/crm/customers`, (schema, {requestBody}) => {
        const data = JSON.parse(requestBody)
        const { id } = data
        schema.db.userDetailData.update({id}, data)
        return {}
    })

    server.get(`${apiPrefix}/crm/mails`, (schema, {queryParams}) => {
        
        const {category} = queryParams
        let data = schema.db.mailData

        if(category === 'sentItem') {
            data = schema.db.mailData.where({ group: 'sentItem' })
        }

        if(category === 'deleted') {
            data = schema.db.mailData.where({ group: 'deleted' })
        }

        if(category === 'draft') {
            data = schema.db.mailData.where({ group: 'draft' })
        }

        if(category === 'starred') {
            data = schema.db.mailData.where({ starred: true })
        }

        if(category === 'work' || category === 'private' || category === 'important') {
            data = schema.db.mailData.where({ label: category })
        }

        return data
    })

    server.get(`${apiPrefix}/crm/mail`, (schema, {queryParams}) => {
        const id = queryParams.id
        const mail = schema.db.mailData.find(id)
        return mail
    })
}