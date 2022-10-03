import React, {Fragment, useContext} from 'react';
import PanelSimple from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {PanelHeaderBack} from "@vkontakte/vkui";

import Context from "../../components/App/context";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import "./SetHabit.css";
import HabitList from "../../components/HabitList/HabitList";
import FinalAddHavingButton from "../../components/FinalAddHavingButton/FinalAddHavingButton";
import AddNewHabit from "../../components/AddNewHabit/AddNewHabit";

const SetHabit = () => {
  const {goToSetCategory, activeCategory} = useContext(Context);

  return (
    <Fragment>
      <PanelSimple left={<PanelHeaderBack onClick={goToSetCategory}/>}>Выбор привычки</PanelSimple>
      <div className="SetHabitContainer">
        <div className="CategoryHeaderContainer">
          <CategoryHeader id={activeCategory}/>
        </div>
        <HabitList id={activeCategory}/>
        <AddNewHabit/>
        <div className="FinalAddHavingButtonContainer">
          <FinalAddHavingButton/>
        </div>
      </div>
    </Fragment>
  )
};

export default SetHabit;
