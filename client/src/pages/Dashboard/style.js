import styled from 'styled-components';

export const DashboardWrapper = styled.div`
	max-width: 1250px;
	width: 1250px;
	height: 100vh;
	overflow: hidden;
  display: flex;
	justify-content: space-between;

  @media (max-width: 1919px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const DashboardContent = styled.div`
	flex-basis: 100%;
	padding: 25px;
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
