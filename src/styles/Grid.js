import styled from 'styled-components';

export const Grid = styled.div`
	margin-top: 1.5em;
	display: grid;
	grid-template-columns: ${(props) => props.span};
`;
