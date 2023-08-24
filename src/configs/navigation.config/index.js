import { useSelector } from 'react-redux'
import appsNavigationConfig from './apps.navigation.config'
const UserDropdown = () => {
const {username} = useSelector((state) => state.user);

const {  userName } = useSelector((state) => state?.auth?.user)


}

const navigationConfig = [
   
    ...appsNavigationConfig,
 
]

export default navigationConfig