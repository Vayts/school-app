import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginWrapper = styled.div`
	height: 100vh;
	width: 100%;
  display: flex;
  justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const LoginHolder = styled.div`
	width: 450px;
  border: 1px dashed #2D5BFF;
	background-color: #fff;
	border-radius: 15px;
	padding: 40px 40px 20px;
`;

export const LoginTitle = styled.h3`
  font-weight: 800;
  font-size: 24px;
	margin: 0 0 30px;
	text-align: center;
`;

export const LoginForm = styled.form`
	margin-top: 20px;
  width: 100%;
`;

export const LoginLinkWrapper = styled.div`
	margin-top: 50px;
  font-size: 14px;
	text-align: right;
`;

export const LoginLink = styled(NavLink)`
	color: #2D5BFF;
  font-size: 14px;
  font-weight: 700;
	margin-left: 5px;
`;
