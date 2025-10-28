import React, { useState } from "react";

function BookingForm({ selectedRoom, onConfirm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ name, email, checkin, checkout });
  };

  if (!selectedRoom) return null;

  return (
    <div className="booking-form">
      <h2>Book Your Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Check-in Date</label>
        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
          required
        />
        <label>Check-out Date</label>
        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          required
        />

        <p>
          <b>Selected Room:</b> {selectedRoom.name} - ${selectedRoom.price}/night
        </p>

        <button className ="font-bold border-2 bg-amber-200" type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
