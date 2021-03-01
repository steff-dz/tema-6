import React, { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [ menuData, setMenuData ] = useState([]);

	useEffect(() => {
		if (menuData.length === 0) {
			getMenuData();
		} else {
			return;
		}
	}, []);

	async function getMenuData() {
		let menuArray = [];
		if (menuArray.length === 0) {
			try {
				const foodCollection = await firebaseInstance.firestore().collection('food');
				const foodData = await foodCollection.get();

				foodData.forEach((el) => {
					menuArray.push({
						id: el.id,
						...el.data()
					});
				});
				setMenuData(menuArray);
			} catch (error) {
				console.log(error);
			}
		}
	}

	return <Component {...pageProps} menuData={menuData} />;
}

export default MyApp;