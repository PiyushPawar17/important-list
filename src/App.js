import React from 'react';

import { games } from './List';

import './styles.css';

const App = () => (
	<React.Fragment>
		<header className="header">
			<h1>Important List</h1>
			<h2>A list to keep track of my completed games</h2>
			<p>Count: {games.length}</p>
		</header>
		<main className="list">
			{games.map(game => (
				<div className="card" key={game}>
					<p>{game}</p>
				</div>
			))}
		</main>
	</React.Fragment>
);

export default App;
