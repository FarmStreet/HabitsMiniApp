import React, {Fragment, useContext, useEffect} from 'react';
import PanelSimple from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {PanelHeaderBack} from "@vkontakte/vkui";

import Context from "../../components/App/context";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";

const SetCategory = () => {
	const { goToHome, setActiveHabit } = useContext(Context);

	useEffect(() => {
		setActiveHabit(null);
	}, []);


	return (
		<Fragment>
			<PanelSimple left={<PanelHeaderBack onClick={goToHome} />}>Выбор категории</PanelSimple>
			<CategoryContainer/>
		</Fragment>
	)
};

export default SetCategory;
