import React, { Component } from 'react';
import MainInfoComponent from './components/task1-header';
import ProjectsComponent from './components/task1-projects';
import InspirationComponent from './components/task1-footer';

import ClubInfo from './components/task2-clubinfo';
import Achievements from './components/task2-achievements';
import CurrentSquad from './components/task2-squad';

import './App.css';

class App extends Component {
  render() {
    /* // task1
    return (
      <div className="App">
        <header className="App-header">
          <h1>Илон Маск: Человек, изменивший будущее</h1>
        </header>
        <MainInfoComponent />
        <ProjectsComponent />
        <InspirationComponent />
      </div>
    ); */

    const clubInfo = {
      name: 'ФК Черноморец',
      city: 'Одесса',
      foundationDate: '1936'
    };

    const achievements = [
      'Чемпион УССР, 1961',
      'Бронзовый призёр Чемпионата СССР, 1974',
      'Серебрянный призёр Чемпионата Украины, 1996',
      'Бронзовый призёр Молодёжного Чемпионата Украины, 2009',
      'Финалист Суперкубка Украины, 2013'
    ];

    const teamRoster = [
      'Георгий Бущан – Вратарь',
      'Владимир Костевич – Защитник',
      'Матеус Пинто – Защитник',
      'Александр Слепов – Защитник',
      'Андрей Кузьмин – Защитник',
      'Александр Третьяков – Полузащитник',
      'Артем Федорчук – Полузащитник',
      'Максим Негрев – Полузащитник',
      'Сергей Кравченко – Полузащитник',
      'Владимир Махарадзе – Нападающий',
      'Матеус Ромеро – Нападающий'
    ];

    // {...clubInfo} - оператор распространения (spread operator), который берёт все ключи и значения
    // объекта clubInfo и передаёт их как отдельные пропсы в компонент 
    return (
      <div className="App">
        <header className="App-header">
          <h1>ФК Черноморец</h1>
        </header>
        <ClubInfo {...clubInfo} /> 
        <Achievements titles={achievements} />
        <CurrentSquad players={teamRoster} />
      </div>
    );
  }
}

export default App;