import React, { useCallback, useState } from 'react';
import { CalendarBlock } from '@src/components/Calendar/Calendar';
import { RightSidebarButton, RightSidebarWrapper } from '@src/pages/Dashboard/RightSidebar/style';
import { SmallProfile } from '@src/pages/Dashboard/SmallProfile/SmallProfile';
import { Schedule } from '@src/pages/Dashboard/Schedule/Schedule';

export const RightSidebar = () => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(true);
	
	const toggleSidebar = useCallback(() => {
		setOpen(!open);
	});
	
	return (
		<>
			<RightSidebarButton onClick={toggleSidebar} open={open}>
				<span className={open ? 'icon-close' : 'icon-calendar'}/>
			</RightSidebarButton>
			<RightSidebarWrapper open={open}>
				<SmallProfile/>
				<CalendarBlock date={date} setDate={setDate}/>
				<Schedule date={date}/>
			</RightSidebarWrapper>
		</>
	);
};
