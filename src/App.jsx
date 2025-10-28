import React, { useState } from "react";
import RoomCard from "./components/RoomCard";
import BookingForm from "./components/BookingForm";
import "./index.css";

import Image1 from "./components/images/Image1.jpg";
import Image2 from "./components/images/Image2.jpg";
import Image3 from "./components/images/Image3.jpg";

function App() {
  const rooms = [
    {
      name: "Single Room",
      price: 50,
      img: Image1,
      features: "1 Bed • Free WiFi • Breakfast Included",
    },
    {
      name: "Double Room",
      price: 80,
      img: Image2 ,
      features: "2 Beds • Free WiFi • Breakfast + Dinner",
    },
    {
      name: "Suite",
      price: 120,
      img: Image3,
      features: "Luxury Bed • Free WiFi • All Meals • Pool Access",
    },
    
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  const handleConfirm = ({ name, checkin, checkout }) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
      alert("Check-out date must be after check-in date!");
      return;
    }

    const nights = Math.ceil(
      (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
    );
    const totalCost = nights * selectedRoom.price;

    setConfirmation({
      name,
      room: selectedRoom.name,
      nights,
      totalCost,
      checkin: checkinDate.toDateString(),
      checkout: checkoutDate.toDateString(),
    });
  };

  return (
    <div >
      <h1 className="font-bold text-amber-700">
        🏨 Welcome to Our Hotel</h1>
      <div className="room-list">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            roomdet={room}
            onSelect={() => {
              setSelectedRoom(room);
              setConfirmation(null);
            }}
          />
        ))}
      </div>

      <BookingForm selectedRoom={selectedRoom} onConfirm={handleConfirm} />

      {confirmation && (
        <div className="confirmation">
          ✅ Thank you <b>{confirmation.name}</b>! <br />
          You booked a <b>{confirmation.room}</b> for{" "}
          <b>{confirmation.nights}</b> nights. <br />
          Total Cost: <b>${confirmation.totalCost}</b> <br />
          Stay: {confirmation.checkin} - {confirmation.checkout}
        </div>
      )}
    </div>
  );
}

export default App;
