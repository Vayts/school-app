import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserToken } from '@store/auth/selectors';

const RequireAuth = ({ roles }) => {
	const userToken = useSelector(getUserToken);
	
	return (
		userToken ? <Outlet/> : <Navigate to='/login' replace/>
	);
};

RequireAuth.propTypes = {
	roles: PropTypes.string,
};

export default RequireAuth;
