import React, { useState } from 'react';
import './ListeDeroulanteAnnees.css';

const ListeDeroulante = ({ startYear, endYear, handleFilmByYears }) => {
  const [years, setYears] = useState(
    ((startYear, endYear) => {
      let tabYears = [];
      for (let i = startYear; i <= endYear; i++) {
        tabYears.push(i);
      }
      return tabYears;
    })(startYear, endYear),
  );

  return (
    <div className="dropdownYear">
      <div>
        <p className="yearText"> Select a year : </p>
      </div>

      <div className>
        <select classname="selection" onChange={handleFilmByYears}>
          <option disabled selected>
            {' '}
            Select a year :
          </option>
          {years.map((year, index) => {
            return (
              <option classname="option" key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ListeDeroulante;
