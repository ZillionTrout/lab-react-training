import React from 'react';
import './App.css';
import './index.css'
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random'
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

const usersArray = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 1.78,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 1.72,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const visaArray = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white" 
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
  },
  {
    type:"Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white" 
  }
] 

function App() {
  return (
    <section className="App">
    {usersArray.map((user, i) => {
      return (
        <IdCard user={user} key={i}/>
      )
    })}
    <div className='greet'>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
    <div>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
    <div className='colorB'>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
    <div className="credit-card">
      {visaArray.map((card, i) => {
        return (
          <CreditCard card={card} key={i}/>
        )})}</div>
</section>
  );
}

export default App;
