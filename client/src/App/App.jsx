import React, { useEffect, useState } from 'react';
import { Layout } from '@hoc/Layout/Layout';
import { Register } from '@src/pages/Register/Register';
import { Login } from '@src/pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '@src/pages/Dashboard/Dashboard';
import RequireAuth from '@src/components/RequireAuth/RequireAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from '@store/auth/actions';
import { Loader } from '@src/components/Loader/Loader';
import { AppWrapper } from './style';

function App() {
	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();
	
	
	useEffect(() => {
		dispatch(refreshUser(setLoading));
	}, []);
	
	return (
		<AppWrapper>
			{ isLoading
				? <Loader size={100}/>
				: (
					<Routes>
						<Route path='/' element={<Layout/>}>
							{/*<Route index element={<Login/>}/>*/}
							<Route path='login' element={<Login/>}/>
							<Route element={<RequireAuth/>}>
								<Route index element={<Dashboard/>}/>
							</Route>
							<Route path='register' element={<Register/>}/>
						</Route>
					</Routes>
				)}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable={false}
				theme='colored'
			/>
		</AppWrapper>
	);
}

export default App;
