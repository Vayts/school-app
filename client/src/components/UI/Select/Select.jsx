import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import {
	DropdownButton,
	DropdownContent, DropdownItem,
	DropdownWrapper,
} from './style';

export const Select = ({ arr, setFieldValue, selectValue, placeholder }) => {
	const wrapperRef = useRef(null);
	const [open, setOpen] = useState(false);
	
	const closeOnOutsideClick = () => {
		setOpen(false);
	};
	useOutsideClick(wrapperRef, closeOnOutsideClick);
	
	const openDropDown = () => {
		setOpen(!open);
	};
	
	return (
		<DropdownWrapper ref={wrapperRef}>
			<DropdownButton onClick={openDropDown} colored={!!selectValue} open={open}>
				{selectValue || placeholder}
				<i className={open ? 'icon-arrow-up' : 'icon-arrow-down'}/>
			</DropdownButton>
			<DropdownContent>
				{open
					? arr.map((el) => {
						return (
							<DropdownItem
								key={uuidv4()}
								onClick={() => {
									setFieldValue('role', el);
									setOpen(null);
								}}
							>
								{el}
							</DropdownItem>
						);
					})
					: null}
			</DropdownContent>
		</DropdownWrapper>
	);
};

Select.propTypes = {
	arr: PropTypes.array,
	selectValue: PropTypes.string,
	setFieldValue: PropTypes.func,
	placeholder: PropTypes.string,
};
