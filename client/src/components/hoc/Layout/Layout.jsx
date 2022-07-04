import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationPanel from '@src/components/NavigationPanel/NavigationPanel';
import { useSelector } from 'react-redux';
import { getUserToken } from '@store/auth/selectors';
import { LayoutWrapper } from '@hoc/Layout/style';

export const Layout = () => {
	const token = useSelector(getUserToken);
	
	return (
		<LayoutWrapper>
			{token ? <NavigationPanel/> : null}
			<Outlet/>
		</LayoutWrapper>
	); 
};
