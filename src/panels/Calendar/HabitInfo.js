import React, {Fragment, useContext } from 'react';
import PanelSimple from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {PanelHeaderBack} from "@vkontakte/vkui";

import Context from "../../components/App/context";
import "./HabitInfo.css";
import Title from "../../components/Title/Title";
import ShareButton from "../../components/ShareButton/ShareButton";
import Calendar from "../../components/Calendar/Calendar";

const HabitInfo = () => {
  const { calendarActiveHabit, goToHome, categoryHabitList } = useContext(Context);

  return (
    <Fragment>
      <PanelSimple left={<PanelHeaderBack onClick={goToHome} />}>{categoryHabitList[calendarActiveHabit.category_id].emoji + categoryHabitList[calendarActiveHabit.category_id].name}</PanelSimple>
      <Title>{categoryHabitList[calendarActiveHabit.category_id].habitList[calendarActiveHabit.habit_id]}</Title>
      <Calendar/>
      <div className="ShareButtonContainer"><ShareButton/></div>
    </Fragment>
  )
};

export default HabitInfo;