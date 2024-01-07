import { CARDSINFO } from '../../constants/cardsInfo';
import Card from '../card/Card';
import { StyledCards } from './styles';

const Cards = () => {
	return (
		<StyledCards>
			{CARDSINFO.map(card => (
				<Card
					key={card.id}
					url={card.url}
					name={card.name}
					verified={card.verified}
					title={card.title}
					information={card.information}
					$bgcolor={card.$bgcolor}
					$borderColor={card.$borderColor}
					$textColor={card.$textColor}
					$titleColor={card.$titleColor}
					$row={card.$row}
					$column={card.$column}
				/>
			))}
		</StyledCards>
	);
};

export default Cards;
