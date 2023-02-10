import React, { useState } from "react";

const PaymentPage = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [number, setNumber] = useState<any>();
  const [card, setCard] = useState<string>();

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        value={card}
        onChange={(e) => setCard(e.target.value)}
      />
    </div>
  );
};

export default PaymentPage;
