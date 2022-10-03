import React, {useContext} from 'react';

import DailyTaskRow from "../DailyTaskRow/DailyTaskRow";
import Context from "../App/context";
import DailyCategoryRow from "../DailyCategoryRow/DailyCategoryRow";

const DailyTaskBody = () => {
  const { dailyHabitList } = useContext(Context);
  let category_enable_list = [];
  dailyHabitList.map(({category_id}) => (category_enable_list.includes(category_id) || category_enable_list.push(category_id)));

  return (
        <tbody>
        {category_enable_list.includes(0) && <DailyCategoryRow category_id={0}/>}
        {dailyHabitList.map(({ habit_id, category_id }) => category_id === 0 && <DailyTaskRow key={category_id + '-' + habit_id} category_id={category_id} habit_id={habit_id}/>)}
        {category_enable_list.includes(1) && <DailyCategoryRow category_id={1}/>}
        {dailyHabitList.map(({ habit_id, category_id }) => category_id === 1 && <DailyTaskRow key={category_id + '-' + habit_id} category_id={category_id} habit_id={habit_id}/>)}
        {category_enable_list.includes(2) && <DailyCategoryRow category_id={2}/>}
        {dailyHabitList.map(({ habit_id, category_id }) => category_id === 2 && <DailyTaskRow key={category_id + '-' + habit_id} category_id={category_id} habit_id={habit_id}/>)}
        {category_enable_list.includes(3) && <DailyCategoryRow category_id={3}/>}
        {dailyHabitList.map(({ habit_id, category_id }) => category_id === 3 && <DailyTaskRow key={category_id + '-' + habit_id} category_id={category_id} habit_id={habit_id}/>)}
        {category_enable_list.includes(4) && <DailyCategoryRow category_id={4}/>}
        {dailyHabitList.map(({ habit_id, category_id }) => category_id === 4 && <DailyTaskRow key={category_id + '-' + habit_id} category_id={category_id} habit_id={habit_id}/>)}
        {category_enable_list.includes(5) && <DailyCategoryRow category_id={5}/>}
        {dailyHabitList.map(({ habit_id, category_id }) => category_id === 5 && <DailyTaskRow key={category_id + '-' + habit_id} category_id={category_id} habit_id={habit_id}/>)}
        </tbody>
  )
};

export default DailyTaskBody;