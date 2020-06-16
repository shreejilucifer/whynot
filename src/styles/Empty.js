import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 5%;
	padding-bottom: 5%;
`;

export const Box = styled.img`
	height: 4em;
	width: 4em;
`;

export const Text = styled.p`
	margin-top: 1.5em;
	font-family: ${(props) => props.theme.fonts.primary};
`;
