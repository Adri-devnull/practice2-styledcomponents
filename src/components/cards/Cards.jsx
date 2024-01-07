import { CARDSINFO } from '../../constants/cardsInfo';
import Card from '../card/Card';
import { StyledCards } from './styles';

const Cards = () => {
	return (
		<StyledCards>
			{CARDSINFO.map(card => (
				<Card
					key={card.id}
					name={card.name}
					verified={card.verified}
					title={card.title}
					information={card.information}
				/>
			))}
		</StyledCards>
	);
};

export default Cards;
