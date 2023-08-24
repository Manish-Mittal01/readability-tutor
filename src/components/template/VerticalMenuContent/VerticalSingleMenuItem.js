import React from 'react'
import { Menu, Tooltip } from 'components/ui'
import VerticalMenuIcon from './VerticalMenuIcon'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { AuthorityCheck } from 'components/shared'
import { setActiveNav } from '../../../store/theme/themeSlice'
import { useNavigate } from 'react-router-dom';
const { MenuItem } = Menu

const CollapsedItem = ({title, translateKey, children, direction}) => {
	const { t } = useTranslation()

	return (
		<Tooltip 
			title={t(translateKey) || title} 
			placement={direction === 'rtl' ? 'left' : 'right'}
		>
			{children}
		</Tooltip>
	)
}

const DefaultItem = (props) => {

	const { nav, onLinkClick, sideCollapsed, userAuthority } = props
	const activeNav = useSelector((state) => state?.theme?.activeNav)
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const navData = (navItem) => {
		//console.log(" before ");
		dispatch(setActiveNav(navItem?.path));
		//console.log(" next ");
		navigate(navItem?.path);
	}
	return (
		<AuthorityCheck userAuthority={userAuthority} authority={nav.authority}>
			<MenuItem key={nav.key} eventKey={nav.key} className="mb-2">
                            {!!nav.path && nav.path.indexOf("http") === -1 ?
				<Link   
					to={nav.path} 
					onClick={() => onLinkClick?.({
						key: nav.key,
						title: nav.title,
						path: nav.path,
					})}
					className={`flex items-center h-full w-full ${(activeNav ===nav?.path ? 'active-nav' : '')}`}
				> 
					<VerticalMenuIcon icon={nav.icon} />
					{ !sideCollapsed && (
						<span className='dash'>
							<Trans i18nKey={nav.translateKey} defaults={nav.title} />
						</span>
					)}
				</Link>
                                :
                                <a  target="_blank" 
					href={nav.path} 
					onClick={() => onLinkClick?.({
						key: nav.key,
						title: nav.title,
						path: nav.path,
					})}
					className={`flex items-center h-full w-full ${(activeNav ===nav?.path ? 'active-nav' : '')}`}
				> 
					<VerticalMenuIcon icon={nav.icon} />
					{ !sideCollapsed && (
						<span className='dash'>
							<Trans i18nKey={nav.translateKey} defaults={nav.title} />
						</span>
					)}
				</a>
                                
                            }
			</MenuItem>
		</AuthorityCheck>
	)
}

const VerticalSingleMenuItem = ({nav, onLinkClick, sideCollapsed, userAuthority, direction}) => {

	return (
		<AuthorityCheck userAuthority={userAuthority} authority={nav.authority}>
			{
				sideCollapsed ? (
					<CollapsedItem 
						title={nav.title} 
						translateKey={nav.translateKey}
						direction={direction}
					>
						<DefaultItem 
							nav={nav} 
							sideCollapsed={sideCollapsed} 
							onLinkClick={onLinkClick}
							userAuthority={userAuthority}
						/>
					</CollapsedItem>
				)
				:
				(
					<DefaultItem 
						nav={nav} 
						sideCollapsed={sideCollapsed} 
						onLinkClick={onLinkClick}
						userAuthority={userAuthority}
					/>
				)
			}
		</AuthorityCheck>
	)
}

export default VerticalSingleMenuItem
