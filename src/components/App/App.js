import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from '../../panels/Home/Home';
import {panel} from "./constants";
import Context from "./context";
import { useAppState } from "./hooks";
import {Panel} from "@vkontakte/vkui";
import SetCategory from "../../panels/SetCategory/SetCategory";
import SetHabit from "../../panels/SetHabit/SetHabit";
import HabitInfo from "../../panels/Calendar/HabitInfo";


const App = () => {

	const state = useAppState();

/*	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);*/

	return (
		<Context.Provider value={state}>
			<View activePanel={state.activePanel}>
				<Panel id={panel.home} separator={false}>
					<Home/>
				</Panel>
				<Panel id={panel.setCategory} separator={true}>
					<SetCategory/>
				</Panel>
				<Panel id={panel.setHabit} separator={true}>
					<SetHabit/>
				</Panel>
				<Panel id={panel.habitInfo} separator={true}>
					<HabitInfo/>
				</Panel>
			</View>
		</Context.Provider>
	);
}

export default App;

