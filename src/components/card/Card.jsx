import {
	StyledCard,
	StyledCardHeader,
	StyledImage,
	StyledInformation,
	StyledName,
	StyledTitle,
	StyledVerified
} from './styles';

const Card = ({ name, verified, title, information }) => {
	return (
		<StyledCard>
			<StyledCardHeader>
				<div>
					<StyledImage src='./public/assets/images/image-daniel.jpg' />
				</div>
				<div>
					<StyledName>{name}</StyledName>
					<StyledVerified>{verified}</StyledVerified>
				</div>
			</StyledCardHeader>
			<StyledTitle>{title}</StyledTitle>
			<StyledInformation>{information}</StyledInformation>
		</StyledCard>
	);
};

export default Card;
