import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { useConfig } from '../ConfigProvider'
import { CollapseContextProvider } from './context/collapseContext'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import MenuContext from './context/menuContext'
import { HiChevronDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNav } from '../../../store/theme/themeSlice'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const MenuCollapse = props => {
	const navigate = useNavigate();
	const { 
		children, 
		className,
		eventKey,
		expanded,
		label,
		onToggle,  
	} = props

	const [ isExpanded, setIsExpanded ] = useState(expanded)
//    console.log('expanded',expanded);
//    console.log('expanded',isExpanded);
//    console.log('set expanded',setIsExpanded);
//    console.log('use state expanded',useState(expanded));
	const { menuItemHeight, variant, sideCollapsed, defaultExpandedKeys } = useContext(MenuContext)

	const { direction } = useConfig()

	useEffect(() => {
		if(defaultExpandedKeys.includes(eventKey)) {
			setIsExpanded(true)
		}
		if (expanded !== isExpanded) {
			setIsExpanded(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [expanded, onToggle, eventKey, defaultExpandedKeys])

	const toggleCollapse = e => {

		if (e.stopPropagation){
			e.stopPropagation();
		}
		else if(window.event){
			window.e.cancelBubble=true;
		}

        if (typeof onToggle === 'function') {
            onToggle(!isExpanded, e)
        }
		setIsExpanded(!isExpanded)
		// e.stopPropagation();
		//console.log('stopppedd');
		//console.log(e);
    }


	
	
	const getChildrenHeight = () => {
	
		let height = 0	
		if (isExpanded && children && children.length) {
			// const arr = props?.nav?.subMenu;
			// const deepCount = (arr = []) => {
				
			// 	return arr
			// 		.reduce((acc, val) => {
			// 			return acc + (Array.isArray(val?.subMenu) ? deepCount(val.subMenu) : 0);				
			// 		}, arr.length);
			
			// }
			//console.log('deepcount check', deepCount(arr));
			//const datasumt = deepCount(arr);				
			height = "auto"; //datasumt * menuItemHeight;
			//console.log('height of me newwnu', datasumt, height, props?.nav?.title, " isExpanded ");

		}

		if (isExpanded && children && !children.length) {

			// console.log(" >>>> ");
			// console.log('Not has submenu ', height, props?.nav?.title, isExpanded, " isExpanded ");
			height = menuItemHeight

		}

		return height

	}
	
	const menuCollapseItemClass = classNames(
		'menu-collapse-item',
		`menu-collapse-item-${variant}`,
		className,
	)
	const activeNav = useSelector((state) => state?.theme?.activeNav)
	const dispatch = useDispatch()
	//console.log('pathsss',props?.nav?.path);
	//console.log('acive nav>>>,activeNav');
	const navData = (navItem) => {
		//console.log(" before ");
		dispatch(setActiveNav(navItem?.path));
		//console.log(" next ");
		navigate(navItem?.path);
	}
	return (
		
		<div className="menu-collapse" >
				
	      <div onClick={(e) => navData(props?.nav) } className={clsx(menuCollapseItemClass, activeNav, props?.nav?.path, activeNav === props?.nav?.path ? 'active-nav' : '')}>
				<div className={ `flex items-center ` } >{label}</div>
				<div className="h-full w-10 flex justify-end items-center" onClick={toggleCollapse}>
					<motion.span 
						className="text-lg mt-1 icon-click"
						initial={{ transform: 'rotate(0deg)' }} 
						animate={{ 
							transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)',
						}}
						transition={{ duration: 0.15 }}
						
						>
						{sideCollapsed ? null : <HiChevronDown /> }
					</motion.span>
				</div>
			</div>
		
			<CollapseContextProvider value={isExpanded}>
				<motion.ul
					className={direction === 'rtl' ? 'mr-5 menu-li-div' : 'ml-5 menu-li-div'}
					initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
					animate={{ 
						opacity: isExpanded ? 1 : 0,						
					 	height: isExpanded ? getChildrenHeight() : 0,
					}}
					transition={{ duration: 0.15 }}
				> 
					{children}
				</motion.ul>
			</CollapseContextProvider>
		</div>
	)
}

MenuCollapse.propTypes = {
	expanded: PropTypes.bool,
	onToggle: PropTypes.func,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	children: PropTypes.node,
	className: PropTypes.string
}

MenuCollapse.defaultProps = {
	expanded: false,
	label: null
}

export default MenuCollapse
