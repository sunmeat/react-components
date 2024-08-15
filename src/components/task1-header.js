import React, { Component } from 'react';
import ElonMuskPhoto from '../images/musk.jpg';
import '../styles/musk1.css';

class MainInfoComponent extends Component {
  render() {
    return (
      <section className="main-info-section">
        <h2>Илон Маск — визионер будущего</h2>
        <img
          src={ElonMuskPhoto}
          alt="Илон Маск"
          className="elon-photo"
        />
        <p>
          Илон Маск — это человек, который воплощает в себе мечты о будущем. Он — визионер, который стремится изменить мир в лучшую сторону с помощью технологий, и у него это получается.
          Это человек, который постоянно толкает границы возможного.
        </p>
      </section>
    );
  }
}

export default MainInfoComponent;