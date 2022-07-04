import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  position: relative;
`;

export const DropdownButton = styled.div`
  user-select: none;
	cursor: pointer;
  background-color: ${({ colored }) => (colored ? '#E6FFE2' : '#F0F0F0')};
	border: ${({ colored }) => (colored ? '1px solid #B2FFA6' : '1px solid transparent')};
	border-radius: 10px;
  text-overflow: ellipsis;
  display: flex;
	align-items: center;
  padding-left: 10px;
	overflow: hidden;
  white-space: nowrap;
	height: 40px;
  position: relative;
	
	i {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
	}
`;

export const DropdownContent = styled.div`
  position: absolute;
	top: 105%;
	width: 100%;
	z-index: 100;
	border-radius: 6px;
  box-shadow: 0 0 10px rgba(132, 132, 132, 0.35);
`;

export const DropdownItem = styled.div`
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  padding: 5px 5px;
  white-space: nowrap;
  user-select: none;
  background-color: #fff;
  text-align: left;

  &:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:hover {
    transition: all 0.1s;
    cursor: pointer;
    background-color: #e3e3e3;
  }
`;
