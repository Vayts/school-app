import styled from 'styled-components';

export const FilesListWrapper = styled.div`
	width: 100%;
  padding: 5px 2px;
  height: 130px;
  border: 1px dashed #2d5bff;
  border-radius: 10px;
	display: flex;
	align-items: center;
`;

export const FilesListBoard = styled.ul`
  display: flex;
	align-items: center;
	width: 100%;

	height: 100%;

	overflow-x: scroll;
	padding: 0;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4264DF;
    border-radius: 10px;
  }
`;

export const FilesListItem = styled.li`
	margin: 0 5px;
	min-width: 70px;
  display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const FilesListImgWrapper = styled.a`
  padding: 10px 0 5px;
  width: 90%;
  background-color: rgba(240, 240, 240, 0.64);
  text-align: center;
  border-radius: 10px;
  position: relative;
`;

export const FilesDeleteButton = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: #2d5bff;

  &:hover {
    background-color: #1B4AF0;
    cursor: pointer;
    transition: all 0.2s;
  }

  &:active {
    background-color: #002ED0;
  }

  span {
    font-size: 10px;
    position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);

    &:before {
      color: #ffffff;
    }
  }
`;

export const FilesListImg = styled.img`
	width: 45px;
	height: 55px;
	vertical-align: top;
`;

export const FilesListName = styled.p`
	margin: 5px 0;
	font-size: 11px;
`;
