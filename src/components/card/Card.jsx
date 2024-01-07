import {
	StyledCard,
	StyledCardHeader,
	StyledImage,
	StyledInformation,
	StyledName,
	StyledTitle,
	StyledVerified
} from './styles';

const Card = () => {
	return (
		<StyledCard>
			<StyledCardHeader>
				<div>
					<StyledImage src='./public/assets/images/image-daniel.jpg' />
				</div>
				<div>
					<StyledName>Name</StyledName>
					<StyledVerified>verified graduate</StyledVerified>
				</div>
			</StyledCardHeader>
			<StyledTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
				laudantium doloribus quod, tempora deleniti sunt quidem odio
				necessitatibus esse unde enim eius omnis perspiciatis qui doloremque
				similique dolorem debitis! Libero.
			</StyledTitle>
			<StyledInformation>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
				omnis. Quibusdam dicta hic dolores veritatis sint harum odit natus
				voluptas! Aspernatur impedit sequi quo commodi omnis, inventore
				obcaecati officiis architecto.
			</StyledInformation>
		</StyledCard>
	);
};

export default Card;
