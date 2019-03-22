import React from 'react';

import games from './games.json';

import './styles.css';

const App = () => (
	<React.Fragment>
		<nav className="navbar">
			<div className="container">
				<h1 className="navbar__header">Games List</h1>
				<div className="navbar__info">
					<p>A list to keep track of my completed games</p>
					<p>Count: {games.games.length}</p>
				</div>
			</div>
		</nav>
		<main>
			<div className="container list">
				{games.games.map(game => (
					<div className="card" key={game.name}>
						<img src={require(`./img/${game.img}`)} alt={game.name} className="card__img" />
						<div className="card__overlay">{game.name}</div>
					</div>
				))}
			</div>
		</main>
	</React.Fragment>
);

export default App;
