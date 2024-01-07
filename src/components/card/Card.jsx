import {
	StyledCard,
	StyledCardHeader,
	StyledImage,
	StyledInformation,
	StyledName,
	StyledTitle,
	StyledVerified
} from './styles';

const Card = ({
	name,
	url,
	verified,
	title,
	information,
	$bgcolor,
	$borderColor,
	$textColor,
	$titleColor
}) => {
	return (
		<StyledCard $bgcolor={$bgcolor}>
			<StyledCardHeader>
				<div>
					<StyledImage src={url} />
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
