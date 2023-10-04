import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Stats = ({ players }) => {
  const [selectedStat, setSelectedStat] = useState('Évaluation');
  const [sortedPlayers, setSortedPlayers] = useState([]);

  useEffect(() => {
    const updateSortedPlayers = () => {
      const newSortedPlayers = [...players].sort((playerA, playerB) =>
        playerB[selectedStat] - playerA[selectedStat]
      );
      setSortedPlayers(newSortedPlayers);
    };

    updateSortedPlayers();
  }, [selectedStat, players]);

  const handleChangeStat = (e) => {
    setSelectedStat(e.target.value);
  };

  return (
    <div className="container mt-4">
       <nav className="navbar navbar-dark bg-green mb-4">
        <h1 className="navbar-brand mx-auto">Statistiques</h1>
      </nav> <select className="form-control mb-4" value={selectedStat} onChange={handleChangeStat}>
         <option value="Points">Points</option>
        <option value="Rebonds">Rebonds</option>
        <option value="Assists">Assists</option>
        <option value="Steals">Steals</option>
        <option value="Blocks">Blocks</option>
        <option value="% Lancer">Lancers réussis</option>
        <option value="% à 3">3 points réussis</option>
        <option value="Évaluation">Évaluation</option>
      </select>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">Place</th>
            <th scope="col" className="text-center">Joueuses</th>
            <th scope="col" className="text-center">{selectedStat}</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={player.id} className={index % 2 === 0 ? 'table-light' : ''}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{player.nom}</td>
              <td className="text-center">
                {selectedStat === 'Points' ? (
                  <>
                    {player.Points} ({player.Pct}%)
                  </>
                ) : (
                  player[selectedStat]
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;