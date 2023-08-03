import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return <div className='container'>
  <Header/>
  <Menu/>
  <Footer/>
  </div>
};
function Header(){
  return <header className='header'>
    <h1>Fast react pizza hut</h1>
  </header>;
}
function Menu(){
  return<main className='menu'>
    <h2>menu</h2>
    <>
    <p>Authentic italian cuisine , 6 creative dishes to chose form , all from our stone oven ,all organic , all delicious</p>
    <ul className='pizzas'>

    {pizzaData.map((pizza)=>{
      return <div >
      <Pizza  pizzaObj={pizza} key={pizza.name}/>
      </div>

})}
</ul>
</>
    </main>
}  
function Pizza({pizzaObj}){
  return (<li className={`pizza ${pizzaObj.soldOut ? "sold-out":""}`} >
    

    <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    
    <div>

      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut? "SOLD OUT":pizzaObj.price}</span>
    </div>
    
  </li>);
}

function Footer(){
  const openhour = 9;
  const closedhour = 22;
  const hour= new Date().getHours();
  const isopen = hour>openhour && hour< closedhour;
  return <footer className='footer'>{isopen ?( <Order closedhour={closedhour}/>):<p>we are closed</p>}</footer>;
  // return React.createElement("footer",null,"we are open now")
}
function Order({closedhour}){
  return <div className='order'>
    <p>we are open until {closedhour}:00 , order online or come to store</p>
    <button className='btn'>order</button>
  </div>
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);
 