import React from 'react';
import {
	SmallProfileImage,
	SmallProfileName,
	SmallProfileRole,
	SmallProfileWrapper,
} from '@src/pages/Dashboard/SmallProfile/style';
import { useSelector } from 'react-redux';
import { getUserInfo } from '@store/auth/selectors';

export const SmallProfile = () => {
	const user = useSelector(getUserInfo);
	
	return (
		<SmallProfileWrapper>
			<SmallProfileImage src='./assets/img/profile.png'/>
			<SmallProfileName>{user.firstName}</SmallProfileName>
			<SmallProfileRole>{user.role}</SmallProfileRole>
		</SmallProfileWrapper>
	);
};
