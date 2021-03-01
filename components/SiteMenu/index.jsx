import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SiteMenu = () => {
	return (
		<MainBase>
			<SiteNav>
				<Link href="/menu">
					<motion.div
						style={{ backgroundColor: '#f45d48' }}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 130 }}
					>
						MENU
					</motion.div>
				</Link>
				<Link href="/order">
					<motion.div
						style={{ backgroundColor: '#078080' }}
						initial={{ opacity: 0, y: -100, rotateZ: 50 }}
						animate={{ opacity: 1, y: 0, rotateZ: 0 }}
						transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 130 }}
					>
						ORDER
					</motion.div>
				</Link>

				<Link href="/login">
					<motion.div
						style={{ backgroundColor: '#f45d48' }}
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.8, duration: 1, type: 'spring', stiffness: 130 }}
					>
						LOG IN
					</motion.div>
				</Link>
			</SiteNav>
		</MainBase>
	);
};

const MainBase = styled.main`
	height: 100vh;
	width: 100vw;
`;

const SiteNav = styled.nav`
	/* border: 1px solid pink; */
	margin: 0 auto;
	width: 80%;
	height: 60%;
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	justify-content: center;
	color: #232323;
	div {
		height: 6rem;
		text-align: center;
		padding: 1.5rem 0rem;
		border-radius: 10px;
		font-weight: bold;
	}
`;

export default SiteMenu;