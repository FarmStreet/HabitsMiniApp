import React, {Fragment, useEffect, useContext} from 'react';
import PanelSimple from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import DailyTaskList from "../../components/DailyTaskList/DailyTaskList";
import AddHabitButton from "../../components/AddHabitButton/AddHabitButton";

import "./Home.css";
import Context from "../../components/App/context";

const Home = () => {
	const { setActiveCategory, setActiveHabit, setCalendarActiveHabit, setCalendarActiveMonth } = useContext(Context);

	useEffect(() => {
		setActiveHabit(null);
		setActiveCategory(0);
		setCalendarActiveHabit({category_id: 0, habit_id: 0});
		setCalendarActiveMonth(0);
	}, []);

	return (
		<Fragment>
			<PanelSimple>Главная</PanelSimple>
			<div className="DailyTaskListContainer">
				<DailyTaskList/>
			</div>
			<div className="AddHabitButtonContainer">
				<AddHabitButton/>
			</div>
		</Fragment>
	)
};

export default Home;
