import styled from 'styled-components';

export const Grid = styled.div`
	margin-top: 1.5em;
	display: grid;
	grid-template-columns: ${(props) => props.span};
	@media only screen and (max-width: 425px) {
		display: flex;
		flex-direction: column;
	}
`;
