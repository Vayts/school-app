import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationPanelWrapper = styled.div`
  background-color: #fff;
  position: relative;
	height: 100vh;
  padding: 40px 50px;
  left: 0;
  top: 0;
  bottom: 0;
	display: inline-block;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);

  hr {
	  display: block;
    border-top: 1px solid #f0f0f0;
	  margin: 30px 0;
  }
`;

export const NavigationLinksWrapper = styled.div`
	margin-top: 80px;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;

  span {
    background-color: #f0f0f0;
    color: #8A8A8A;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      font-size: 20px;
    }
  }

  &.active {

    span {
      background-color: #2d5bff;


      &:before {
        color: #fff;
      }
    }

    p {
      color: #2d5bff;
    }
  }

  &:hover {
    span {
      background-color: #6281ec;
      transition: all 0.2s;


      &:before {
        color: #fff;
      }
    }

    p {
      color: #2d5bff;
    }
  }
`;

export const NavigationLinkText = styled.p`
	margin-left: 10px;
	color: #8A8A8A;
	font-size: 14px;
  font-weight: 700;
`;

export const NavigationExitWrapper = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
	cursor: pointer;
  position: absolute;
	width: 150px;
	bottom: 50px;
	
  span {
    background-color: #f0f0f0;
    color: #8A8A8A;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      font-size: 20px;
    }
  }

  &.active {

    span {
      background-color: #2d5bff;


      &:before {
        color: #fff;
      }
    }

    p {
      color: #2d5bff;
    }
  }

  &:hover {
    span {
      background-color: #6281ec;
      transition: all 0.2s;


      &:before {
        color: #fff;
      }
    }

    p {
      color: #2d5bff;
    }
  }
`;

export const NavigationExitText = styled.p`
	margin-left: 10px;
	color: #8A8A8A;
	font-size: 14px;
  font-weight: 700;
`;
