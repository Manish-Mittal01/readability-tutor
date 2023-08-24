import React from 'react'
import { Menu, Dropdown } from 'components/ui'
import { Link } from 'react-router-dom'
import VerticalMenuIcon from './VerticalMenuIcon'
import { Trans } from 'react-i18next'
import { AuthorityCheck } from 'components/shared'
import { setActiveNav } from '../../../store/theme/themeSlice'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

const { MenuItem, MenuCollapse } = Menu

const DefaultItem = ({nav, onLinkClick, userAuthority}) => {

	const dispatch = useDispatch();
	const activeNav = useSelector((state) => state?.theme?.activeNav);
	//console.log(activeNav, " active nav Item ");

	const handleLinkClick = (data) => {
		//console.log('handle click');

		dispatch(setActiveNav(data?.path));
		onLinkClick?.(data);
	

	}
	const activeNavExpanded = nav.path;
	//console.log('check path',activeNavExpanded,'active nav',activeNav);
   
	return (
		<AuthorityCheck 
			userAuthority={userAuthority} 
			authority={nav.authority}
		>
			<MenuCollapse
			    nav ={nav}
				label={
					<>
						<VerticalMenuIcon icon={nav.icon} />
						<span>
							<Trans i18nKey={nav.translateKey} defaults={nav.title} />
						</span>
					</>
				}
				key={nav.key} 
				eventKey={nav.key} 
				// expanded={ (activeNavExpanded === activeNav )} 
				expanded={true} 
				className="mb-2"
			>
				{
					nav.subMenu.map(subNav => (
                                                
                                                subNav.subMenu.length > 0 
								? 
								<VerticalCollapsedMenuItem 
									key={subNav.key} 
									nav={subNav}  
									userAuthority={userAuthority}
									 
								/>
                                                :
                                                                        
						<AuthorityCheck 
							userAuthority={userAuthority} 
							authority={subNav.authority}
							key={subNav.key}
						>
							<MenuItem eventKey={subNav.key} className={ clsx(activeNav === subNav?.path ? "active-nav" : "", "mb-2", activeNav, nav?.path) }> 
								{subNav.path 
									? 
									<Link 
										className="h-full w-full flex items-center" 
										onClick={() => handleLinkClick?.(
											{
												key: subNav.key,
												title: subNav.title,
												path: subNav.path,
											}
										)} 
										to={subNav.path}
									>
										<span> 
											<Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
										</span>
									</Link>
									: 
									<span>
                                                                               
										<Trans i18nKey={subNav.translateKey} defaults={subNav.title} />	
									</span>
								}
							</MenuItem>
						</AuthorityCheck>
					))
				}
			</MenuCollapse>
		</AuthorityCheck>
	)
}

const CollapsedItem = ({nav, onLinkClick, userAuthority, direction}) => {

	const menuItem = (
		<MenuItem key={nav.key} eventKey={nav.key} className="mb-2">
			<VerticalMenuIcon icon={nav.icon} />
		</MenuItem>
	)

	return (
		<AuthorityCheck 
			userAuthority={userAuthority} 
			authority={nav.authority}
		>
			<Dropdown 
				trigger="hover" 
				renderTitle={menuItem} 
				placement={direction === 'rtl' ? 'middle-end-top' : 'middle-start-top'}
			>
				{
					nav.subMenu.map(subNav => (
						<AuthorityCheck 
							userAuthority={userAuthority} 
							authority={subNav.authority}
							key={subNav.key}
						>
							<Dropdown.Item eventKey={subNav.key}> 
								{subNav.path 
									? 
									<Link 
										className="h-full w-full flex items-center" 
										onClick={() => onLinkClick?.(
											{
												key: subNav.key,
												title: subNav.title,
												path: subNav.path,
											}
										)} 
										to={subNav.path}
									>
										<span>
											<Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
										</span>
									</Link>
									: 
									<span>
										<Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
									</span>
								}
							</Dropdown.Item>
						</AuthorityCheck>
					))
				}
			</Dropdown>
		</AuthorityCheck>
	)
}

const VerticalCollapsedMenuItem = ({sideCollapsed, ...rest}) => {

	return sideCollapsed ? <CollapsedItem {...rest} /> : <DefaultItem {...rest} />
}

export default VerticalCollapsedMenuItem
