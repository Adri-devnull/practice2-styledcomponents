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
	$titleColor,
	$row,
	$column
}) => {
	return (
		<StyledCard $bgcolor={$bgcolor} $row={$row} $column={$column}>
			<StyledCardHeader>
				<div>
					<StyledImage $borderColor={$borderColor} src={url} />
				</div>
				<div>
					<StyledName $titleColor={$titleColor}>{name}</StyledName>
					<StyledVerified>{verified}</StyledVerified>
				</div>
			</StyledCardHeader>
			<StyledTitle $titleColor={$titleColor}>{title}</StyledTitle>
			<StyledInformation $textColor={$textColor}>
				{information}
			</StyledInformation>
		</StyledCard>
	);
};

export default Card;
