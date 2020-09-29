import React from 'react';

import { completedGames, unfinishedGames } from './List';

import './styles.css';

const App: React.FC = () => (
	<>
		<header className="header">
			<h1>Important List</h1>
			<h2>A list to keep track of the games that I've played</h2>
			<p className="count">Total Count: {completedGames.length + unfinishedGames.length}</p>
		</header>
		<main>
			<section className="games">
				<h3 className="title">Completed Games</h3>
				<p className="count">Count: {completedGames.length}</p>
				<section className="list">
					{completedGames.map(game => (
						<div className="card" key={game}>
							<p>{game}</p>
						</div>
					))}
				</section>
			</section>
			<section className="games">
				<h3 className="title">Unfinished Games / Competitive Games</h3>
				<p className="count">Count: {unfinishedGames.length}</p>
				<section className="list">
					{unfinishedGames.map(game => (
						<div className="card" key={game}>
							<p>{game}</p>
						</div>
					))}
				</section>
			</section>
		</main>
	</>
);

export default App;
