import React from "react";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      word: "",
      translate: "",
      cards: []
    }
  }

updateInput(key, value){
  this.setState({
    [key]: value
  })
}

 addCard() {
   const newCard = {
     id: 1 + this.state.id,
     value: {
       word: this.state.word.slice(),
       translate: this.state.translate.slice(),
       overturned: false
     }
   }

   this.setState({
     id: newCard.id,
     word:"",
     translate:"",
     cards: [...this.state.cards, newCard]
   })
 }

turnCard(id) {
  const cards = [...this.state.cards];

  let index = cards.findIndex((card) => {
    return card.id === id
  });

  cards[index].value.overturned = !cards[index].value.overturned;

  this.updateInput("cards", cards);
}

  render () {
    return (
      <div className="App">
        <h2 className = "Title">Карточки иностранных слов</h2>
        <div className = "words">
         <input type = "text" placeholder = "Введите слово" value={this.state.word}
         onChange={(e) => this.updateInput("word", e.target.value)} />
         <input type = "text" placeholder = "Введите слово" value={this.state.translate}
         onChange={(e) => this.updateInput("translate", e.target.value)} />
         <button className="btn add-btn" onClick={() => this.addCard()}>
            Добавить
         </button>
         <div>
           {this.state.cards.map(cards => {
             return(
               <div key={cards.id}
               className={"card" + (cards.value.overturned ? " overturned" : "")}
               onClick={() => this.turnCard(cards.id)}>
                {cards.value.overturned ? cards.value.translate : cards.value.word}
               </div>
             )
           })}
         </div>
        </div>
      </div>
    );
  }
}

export default App;
