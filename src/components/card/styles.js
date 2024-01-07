import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: #a775f1;
	padding: 30px;
	font-family: 'Barlow Semi Condensed', sans-serif;
	background-color: ${({ $bgcolor }) => $bgcolor};
	border-radius: 10px;
	grid-row: ${({ $row }) => $row};
	grid-column: ${({ $column }) => $column};

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
		box-shadow: 2px 2px 20px #e0e0e0;
	}
`;

const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const StyledImage = styled.img`
	border-radius: 50%;
	border: 4px solid;
	border-color: ${({ $borderColor }) => $borderColor};
`;

const StyledName = styled.h3`
	color: #fff;
	margin: 0px;
	color: ${({ $titleColor }) => $titleColor};
`;

const StyledVerified = styled.h3`
	color: #a1a1a1;
	margin: 0px;
	font-size: 13px;
`;

const StyledTitle = styled.h2`
	font-size: 20px;
	color: #fff;
	font-weight: bold;
	color: ${({ $titleColor }) => $titleColor};
`;

const StyledInformation = styled.p`
	font-size: 13px;
	color: ${({ $textColor }) => $textColor};
	line-height: 1.7em;
`;

export {
	StyledCard,
	StyledCardHeader,
	StyledImage,
	StyledName,
	StyledVerified,
	StyledTitle,
	StyledInformation
};
