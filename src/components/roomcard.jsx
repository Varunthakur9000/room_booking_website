import React from "react";

function RoomCard({ roomdet, onSelect }) {
  return (
    <div className="room-card">
      <img src={roomdet.img} alt={roomdet.name} />
      <div className="room-info">
        <h3>{roomdet.name}</h3>
        <p>{roomdet.features}</p>
        <p className="price">${roomdet.price}/night</p>
        <button className="select-btn" onClick={onSelect}>
          Select
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
