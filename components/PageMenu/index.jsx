import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PageMenu = () => {
	return (
		<HeaderBase>
			<Link href="/">
				<div>
					<img src="https://img2.pngio.com/alphabet-b-letter-letters-red-icon-alphabet-b-png-512_512.png" />
				</div>
			</Link>
		</HeaderBase>
	);
};

const HeaderBase = styled.header`
	padding-top: 0.3rem;
	height: 6rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	div {
		width: fit-content;
		height: fit-content;
		img {
			height: 5.5rem;
		}
	}
`;
export default PageMenu;