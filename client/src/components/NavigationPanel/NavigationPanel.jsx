import React from 'react';
import { Logo } from '@src/components/Logo/Logo';
import { useLogout } from '@src/hooks/useLogout';
import {
	NavigationExitText,
	NavigationExitWrapper,
	NavigationLink,
	NavigationLinksWrapper,
	NavigationLinkText,
	NavigationPanelWrapper,
} from './style';

const NavigationPanel = () => {
	const logout = useLogout();
	
	return (
		<NavigationPanelWrapper>
			<Logo/>
			<NavigationLinksWrapper>
				<NavigationLink to='/'>
					<span className='icon-home'/>
					<NavigationLinkText>Home</NavigationLinkText>
				</NavigationLink>
				<NavigationLink to='/calendar'>
					<span className='icon-calendar'/>
					<NavigationLinkText>Calendar</NavigationLinkText>
				</NavigationLink>
				<NavigationLink to='/rating'>
					<span className='icon-rating'/>
					<NavigationLinkText>Rating</NavigationLinkText>
				</NavigationLink>
				<NavigationLink to='/attendance'>
					<span className='icon-attendance'/>
					<NavigationLinkText>Attendance</NavigationLinkText>
				</NavigationLink>
				<hr/>
				<NavigationLink to='/homework'>
					<span className='icon-homework'/>
					<NavigationLinkText>Homework</NavigationLinkText>
				</NavigationLink>
				<NavigationLink to='/settings'>
					<span className='icon-settings'/>
					<NavigationLinkText>Settings</NavigationLinkText>
				</NavigationLink>
				<NavigationExitWrapper onClick={logout}>
					<span className='icon-exit'/>
					<NavigationExitText>Exit</NavigationExitText>
				</NavigationExitWrapper>
			</NavigationLinksWrapper>
		</NavigationPanelWrapper>
	);
};

export default NavigationPanel;
