import styled from 'styled-components';

export const DashboardWrapper = styled.div`
	width: 100%;
  display: flex;
	justify-content: space-between;
`;

export const DashboardContent = styled.div`
	flex-basis: 100%;
	padding: 50px;
	display: flex;
	flex-direction: column;
  justify-content: space-between;
`;

export const DashboardUpContent = styled.div`
  display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const DashboardDownContent = styled.div`
	flex-basis: 100%;
  display: flex;
  flex-grow: 1;
	flex-shrink: 1;
	justify-content: space-between;
`;

export const DashboardSubContent = styled.div`
	flex-basis: 20%;
  display: flex;
	flex-direction: column;
`;

export const DashboardContentSplitter = styled.div`
	height: 6%;
`;

export const DashboardWelcomeText = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
`;
