import React, { useState } from "react";

const classMate = ["a", "b", "c", "d", "f"];

const Array = () => {
  const [teamMember, setTeamMember] = useState([]);

  const addToTeam = (name) => {
    setTeamMember((members) => {
      return [...members, name];
    });
  };

  const removeToTeam = (name) => {
    setTeamMember((members) => {
      const result = [...members];
      result.splice(members.indexOf(name), 1);
      return result;
    });
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <h3>Claass Mate</h3>
        <ul>
          {classMate.map((name) => {
            if (teamMember.includes(name)) return null;
            return (
              <li
                key={name}
                style={{
                  listStyle: "none",
                }}
              >
                {name}
                <button
                  style={{
                    marginLeft: "50px",
                  }}
                  onClick={() => addToTeam(name)}
                >
                  Add
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Basketball team</h3>
        <ul>
          {teamMember.map((name) => (
            <li
              key={name}
              style={{
                listStyle: "none",
              }}
            >
              {name}
              <button
                style={{
                  marginLeft: "50px",
                }}
                onClick={() => removeToTeam(name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Array;
