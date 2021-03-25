import React from "react";
import Contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        email={Contacts[0].email}
        phone={Contacts[0].phone}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        email={Contacts[1].email}
        phone={Contacts[1].phone}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        email={Contacts[2].email}
        phone={Contacts[2].phone}
      />
    </div>
  );
}

export default App;
