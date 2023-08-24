import React, { useRef,useState,useEffect,useCallback } from 'react'
import { Drawer, Button} from 'components/ui'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks,setTableData} from 'store/readability/readabilitySlice'
import  Addinstitute from 'views/institution/AddInstitute/index'
import  Addteacher from 'views/teacher/AddTeacher/index'
import  Addstudent from 'views/student/AddStudent/index'
import  Addbook from 'views/books/AddBook/index'
import { BsArrowLeftSquareFill ,BsArrowLeft,BsXSquareFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
import { closeEditCustomerBooksDialog } from 'store/readability/readabilitySlice'
import Books from 'common/Books'
import Students from 'common/Students'

const DrawerFooter = ({onCancel}) => {
	const showDrawerInfo = useSelector((state) => state?.readability?.showDrawerInfo)
	return (

				<>
					<Button onClick={ onCancel}  shape="circle" variant="plain" size="lg" icon={<BsXSquareFill /> } />

				</>
			)


}
const EditCustomerProfile = () => {
	let drawerContentBlock
	const dispatch = useDispatch()
	const formikRef = useRef()

   const dialogOpenBooks = useSelector((state) => state?.readability?.editCustomerBooksDialog)
	useEffect(() => {
	
			const textForStorage = 'yes'
			const getPopupCookie = localStorage.getItem('popupCookieKey');
			if(getPopupCookie===undefined ||getPopupCookie==='' || getPopupCookie===null){
				localStorage.setItem('popupCookieKey', textForStorage);
			}
		
  	},[]);

	const showDrawerInfo = useSelector((state) => state?.readability?.showDrawerInfo)
	const onDrawerClose = () => {
		dispatch(closeEditCustomerBooksDialog())
	}

	const formSubmit = () => {
		formikRef.current?.submitForm()
	}
	

	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		
	  });
	
	  const [drawerWidth, setDrawerWidth] = useState(800);
	 
	  useEffect(() => {
		window.onresize = () => {
		  setWindowSize({
			width: window.innerWidth,
			
		  });
		};
		if(windowSize.width<=1080){
		setDrawerWidth(windowSize.width);
		}
		
	  }, [windowSize.width]);
		
	const data =  [
			{
				id: '1',
				name: 'mamta sfa',
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
		

	]
	//const state = useSelector((state) => state);
	//console.log(' institution data >> ', state);
	const filterData = useSelector((state) => state?.crmCustomers?.data?.filterData)
	
	const fetchData = useCallback(() => {
		dispatch(getBooks({filterData}))
	}, [filterData, dispatch])

	
		useEffect(() => {
			fetchData()
		}, [fetchData])

// if(textFromStorage==null){
// 	localStorage.setItem('popupCookieKey', textForStorage);

// }else{
// 	console.log(textFromStorage);
// }
// console.log(cookieData);

	let width = drawerWidth
	const handleClickWidth = () => {
		if(drawerWidth === 800){
			setDrawerWidth(400);
		} 
	}
	
	const handleClick = () => {
		//setOpen(!open)
		
		if(width=== 400){
			width=800

		} else if(width === 800){
			width=1000
		} 
		else if(width === 1000){
			width=800
		}
		
		else {
			width=400
		}
	    setDrawerWidth(width);

	  }
	drawerContentBlock =  <><div className='mx-4'><h5 className='mb-4'>Books</h5><Books  data={data} /></div></>
	  if(showDrawerInfo?.contentType =='students'){
		drawerContentBlock = <><div className='mx-4'><h5 className='mb-4'>Students</h5><Students  data={data} /></div></>
		 
	 } else if (showDrawerInfo?.contentType =='books') {
		drawerContentBlock =  <><div className='mx-4'><h5 className='mb-4'>Books</h5><Books  data={data} /></div></>
	 }
	 else if (showDrawerInfo?.contentType =='addinstitute') {
		drawerContentBlock =  <><div className='mx-4'><Addinstitute /></div></>
	 }
	 else if (showDrawerInfo?.contentType =='addteacher') {
		drawerContentBlock =  <><div className='mx-4'><h5 className='mb-4'>Add Teacher</h5><Addteacher /></div></>
	 }
	 else if (showDrawerInfo?.contentType =='addstudent') {
		drawerContentBlock =  <><div className='mx-4'><h5 className='mb-4'>Add Student</h5><Addstudent /></div></>
	 }
	 else if (showDrawerInfo?.contentType =='addbook') {
		drawerContentBlock =  <><div className='mx-4'><h5 className='mb-4'>Add Book</h5><Addbook /></div></>
	 }
	return (
		<>
			<Drawer
				isOpen={dialogOpenBooks}
				onClose={onDrawerClose}
				type={'books'}
				width={drawerWidth}
				onRequestClose={onDrawerClose}
				closable={false}
				bodyClass="p-0 booksBlock"
				// footer={<DrawerFooter onCancel={onDrawerClose} onSaveClick={formSubmit} />}
			>
			<div className='flex justify-between items-center'>
				<div className='expandIcon'>
				{(windowSize.width>=1080) && <>
				
					<Button className="" onClick={handleClick}   shape="circle" variant="plain" size="lg" icon={ (drawerWidth == 400 ) ? <BsArrowLeftSquareFill /> :(drawerWidth == 800 ) ? <BsArrowLeftSquareFill /> : <BsFillArrowRightCircleFill />} />
					{drawerWidth == 800 && <Button className="" onClick={handleClickWidth}   shape="circle" variant="plain" size="lg" icon={<BsFillArrowRightCircleFill />} />}
				</>
				}
				</div>
			<div>
				
				<DrawerFooter onCancel={onDrawerClose} onSaveClick={formSubmit} />
			</div>
		</div>
			
		<div className=''>
		{drawerContentBlock}
		</div>
		</Drawer>
		{/* <ReadabilityDrayer/> */}
		</>
	)
}

export default EditCustomerProfile
