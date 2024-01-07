import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: #a775f1;
	padding: 30px;
	font-family: 'Barlow Semi Condensed', sans-serif;
`;

const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const StyledImage = styled.img`
	border-radius: 50%;
`;

const StyledName = styled.h3`
	color: #fff;
	margin: 0px;
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
`;

const StyledInformation = styled.p`
	font-size: 13px;
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
