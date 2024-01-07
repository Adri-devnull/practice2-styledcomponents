import styled from 'styled-components';

const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 50px 300px;
	}
`;

export { StyledCards };
