import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignOut, apiSignUp,apiGetProfile } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'
import { useEffect } from 'react'

function useAuth() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
	const query = useQuery()
    const { token, signedIn } = useSelector((state) => state?.auth?.session)
 	useEffect(()=>{
		if(token){
			apiGetProfile()
				.then((profileRespone)=>{

					//console.log('data profile>>>',profileRespone.data.Data);
					//    const displayName= profileRespone.data.Data.DisplayName
					//    const userName= profileRespone.data.Data.UserName

					const {CountryId,CountryName,DisplayName,UserName,Email,MobileNo,RoleId,RoleName,UserTypeName}= profileRespone.data.Data
						const userData = {					
							CountryId: CountryId, 
							CountryName:CountryName, 
							DisplayName :DisplayName,
							userName  : UserName,
							email :Email,
							MobileNo :MobileNo,
							RoleId:RoleId,
							RoleName:RoleName,
							UserTypeName:UserTypeName,	
							authority: ['user','admin','teacher'],
							avatar: "" 
							
						}

						dispatch(setUser(userData))
						
						const redirectUrl = query?.get(REDIRECT_URL_KEY)
						navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
				})
				.catch((error)=>{
					//console.log(error, " error >>> ")
				})
			
		}
 	},[token])

    const signIn = async (values) => {
        try {
			values.FingerPrintKey = "readability";
			//values.authority = "admin";
			const resp = await apiSignIn(values)
			console.log('resp',resp);
			//resp?.data?.authority = "admin";
			if (resp?.data && resp?.data?.ResultCode ==='Success' ) {
				

				//console.log('respdata',resp.data)
				console.log('resp.data',resp?.data);
				const { UserToken } = resp?.data
				//const [ UserToken ] = resp?.data?.UserToken
				//console.log('resp.data',resp?.data)
				dispatch(onSignInSuccess(UserToken))     
				// if(resp?.data?.user) {
				// const userData = { 
				// 	avatar: '', 
				// 	userName: 'kunal', 
				// 	authority: ['USER'], 
				// 	email: 'kunal4sd@gmail.com'
				// }
		    	
				// 	dispatch(setUser(userData || { 
				// 		avatar: '', 
				// 		userName: 'kunal', 
				// 		authority: ['USER'], 
				// 		email: 'kunal4sd@gmail.com'
				// 	}))


				// }
				//  const redirectUrl = query.get(REDIRECT_URL_KEY)
				//  navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
                return {
                    status: 'success',
                    message: ''
                }
			} 
		} catch (errors) {
		    //console.log('errors',errors?.response?.data?.ResultDescription);
			return {
                status: 'failed',
                message: errors?.response?.data?.ResultDescription || errors.toString()
				
            }
			
		}
    }

	const signUp = async (values) => {
        try {
			const resp = await apiSignUp(values)
			if (resp.data) {
				const { token } = resp.data
				dispatch(onSignInSuccess(token))
				// if(resp.data.user) {
					
				const useData =	{ 
							avatar: '', 
							userName: 'Anonymous', 
							authority: ['USER'], 
							email: ''
						 }
						// resp.data.user = useData
				 
					 dispatch(setUser(useData || { 
					 	avatar: '', 
					 	userName: 'Kunal', 
						authority: ['USER'], 
					 	email: 'kunal4sd@gmail.com'
					 }
					 )
					)
				// }
				const redirectUrl = query.get(REDIRECT_URL_KEY)
				navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
                return {
                    status: 'success',
                    message: ''
                }
			}
		} catch (errors) {
			
			return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString()
				
            }
			
		}
    }

    const handleSignOut = ()  => {
		dispatch(onSignOutSuccess())
		dispatch(setUser(initialState))
		navigate(appConfig.unAuthenticatedEntryPath)
	}

    const signOut = async () => {
		//await apiSignOut()
		handleSignOut()
	}
    
    return {
        authenticated: token && signedIn,
        signIn,
		signUp,
        signOut
    }
}

export default useAuth