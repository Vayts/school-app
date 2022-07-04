import React, { useState } from 'react';
import { CalendarBlock } from '@src/components/Calendar/Calendar';
import { RightSidebarWrapper } from '@src/pages/Dashboard/RightSidebar/style';
import { SmallProfile } from '@src/pages/Dashboard/SmallProfile/SmallProfile';
import { Schedule } from '@src/pages/Dashboard/Schedule/Schedule';

export const RightSidebar = () => {
	const [date, setDate] = useState(new Date());
	
	return (
		<RightSidebarWrapper>
			<SmallProfile/>
			<CalendarBlock date={date} setDate={setDate}/>
			<Schedule date={date}/>
		</RightSidebarWrapper>
	);
};
