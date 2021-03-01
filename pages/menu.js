import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import MenuSkeleton from '../components/MenuSkeleton';
import PageMenu from '../components/PageMenu';
import { Wrapper } from '../components/Wrapper';

const Menu = ({ menuData }) => {
	//states for the food data coming from firestore
	const [ burgers, setBurgers ] = useState([]);
	const [ drinks, setDrinks ] = useState([]);
	const [ sides, setSides ] = useState([]);
	const [ displayFood, setDisplayFood ] = useState([]);

	//Filtering and sorting out the different food types into different states for organization.
	useEffect(
		() => {
			setBurgers([ ...menuData.filter((item) => item.type === 'burger') ]);
			setDrinks([ ...menuData.filter((item) => item.type === 'drink') ]);
			setSides([ ...menuData.filter((item) => item.type === 'side') ]);
		},
		[ menuData ]
	);

	//Rending out the food in a desired order
	useEffect(
		() => {
			if (burgers.length !== 0) {
				setDisplayFood([ ...burgers, ...sides, ...drinks ]);
			}
		},
		[ burgers ]
	);

	//Page skeleton below
	function renderSkeleton() {
		return (
			<React.Fragment>
				<MenuSkeleton />
				<MenuSkeleton />
				<MenuSkeleton />
			</React.Fragment>
		);
	}

	//Actual page render below:
	function renderPage() {
		return displayFood.map((item) => (
			<FoodArticle key={item.id}>
				<img className={item.type} src={item.pic} />
				<div className="title-container">{item.name}</div>
				<ClickCard activeStyle={{ opacity: '1' }}>
					<h2>{item.toppings === undefined ? '' : 'Toppings'}</h2>
					<ul>{renderToppings(item.toppings)}</ul>
				</ClickCard>
			</FoodArticle>
		));
	}

	//Function to render out the burger toppings in a list
	function renderToppings(data) {
		if (data === undefined) {
			return <li>Something will come here later.</li>;
		} else {
			return data.map((el) => <li key={el}>{`${el}`}</li>);
		}
	}

	//Filter handler to switch between food types.
	function filterHandler(e) {
		if (e.target.innerHTML === 'burgers') {
			setDisplayFood([]);
			setDisplayFood([ ...burgers ]);
		} else if (e.target.innerHTML === 'sides') {
			setDisplayFood([]);
			setDisplayFood([ ...sides ]);
		} else if (e.target.innerHTML === 'drinks') {
			setDisplayFood([]);
			setDisplayFood([ ...drinks ]);
		} else if (e.target.innerHTML === 'all') {
			setDisplayFood([]);
			setDisplayFood([ ...burgers, ...sides, ...drinks ]);
		}
	}

	return (
		<React.Fragment>
			<Wrapper>
				<PageMenu />
				<MenuNav>
					<ul>
						<li onClick={(e) => filterHandler(e)}>burgers</li>
						<li onClick={(e) => filterHandler(e)}>sides</li>
						<li onClick={(e) => filterHandler(e)}>drinks</li>
						<li onClick={(e) => filterHandler(e)}>all</li>
					</ul>
				</MenuNav>
				<MainBase>{displayFood.length === 0 ? renderSkeleton() : renderPage()}</MainBase>
			</Wrapper>
		</React.Fragment>
	);
};

const MenuNav = styled.nav`
	width: 80vw;
	padding-top: 1rem;
	height: fit-content;

	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		list-style: none;
		font-size: 2.5rem;
		color: #00214d;
		li {
			cursor: pointer;
			padding: 0.5rem;
			border-radius: 5px;
			&:hover {
				background-color: #fde24f;
			}
		}
	}
`;

const MainBase = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
	gap: 1rem;
`;

const FoodArticle = styled.article`
	border: 2px solid #00214d;
	width: 100%;
	height: 40vh;
	background-color: white;
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	.side,
	.drink {
		width: 50%;
		align-self: center;
	}
	img {
		width: 100%;
		height: 70%;
	}
	.title-container {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3rem;
		color: #00214d;
		background-color: #00ebc7;
	}
`;

const ClickCard = styled.div`
	background-color: #ff5470;
	border-radius: 5px;
	width: 100%;
	height: 100%;
	opacity: 1;
	position: absolute;
	flex-direction: column;
	align-items: flex-start;
	font-size: 2rem;
	padding-left: 1rem;
	padding-top: 0.5rem;
	opacity: 0;
	&:hover {
		opacity: 1;
	}
	/* .show-card {
		display: flex;
	} */
	ul {
		padding-left: 1.5rem;
	}
`;
export default Menu;