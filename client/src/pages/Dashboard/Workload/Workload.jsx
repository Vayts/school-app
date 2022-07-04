import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WorkloadTitleWrapper, WorkloadWrapper } from '@src/pages/Dashboard/Workload/style';
import BlockTitle from '@src/components/BlockTitle/BlockTitle';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip, ResponsiveContainer,
} from 'recharts';
import { Loader } from '@src/components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import CustomTooltip from '@src/components/CustomTooltip/CustomTooltip';

const Workload = ({ dispatcher, selector }) => {
	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const workloadData = useSelector(selector);
	const axiosPrivate = useAxiosPrivate();
	
	useEffect(() => {
		const controller = new AbortController();
		
		dispatch(dispatcher(setLoading, controller, axiosPrivate));
		
		return () => {
			controller.abort();
		};
	}, []);
	
	return (
		<WorkloadWrapper>
			<WorkloadTitleWrapper>
				<BlockTitle text='Workload'/>
			</WorkloadTitleWrapper>
			{isLoading ? <Loader/> : (
				<ResponsiveContainer width='100%' height="70%">
					<AreaChart
						data={workloadData}
						margin={{ top: 10, bottom: 0 }}
						strokeWidth={2}
					>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#96ADFF" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#ECF0FF" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#5073EE" stopOpacity={0.7} />
								<stop offset="95%" stopColor="#ECF0FF" stopOpacity={0.8} />
							</linearGradient>
						</defs>
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							tickSize={0}
							dy={15}
						/>
						<YAxis hide />
						<Tooltip cursor={false} content={<CustomTooltip/>}/>
						<Area
							type="monotone"
							dataKey="hours"
							stroke="#092BA4"
							fillOpacity={1}
							fill="url(#colorPv)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			)}
		</WorkloadWrapper>
	);
};

Workload.propTypes = {
	dispatcher: PropTypes.func,
	selector: PropTypes.func,
};

export default Workload;
