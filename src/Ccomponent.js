// import React, { Component } from 'react'

// export default class Ccomponent extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//     count:0
//     }

//     this.increment = this.increment.bind(this)
//     this.decrement=this.decrement.bind(this)
//     this.reset= this.reset.bind(this)
//   }

//   increment(){
//       this.setState(state =>({
//           count:state.count +1
//       }))
//   }

//   decrement(){
//       this.setState(state=>({
//           count:state.count -1
//       }))
//   }

//   reset(){
//       this.setState ({
//         count:0
//       })
//       }

//     render() {
//     return (
//       <div>
//       <button onClick={this.increment}>increment</button>
//       <button onClick={this.decrement}>decrement</button>
//       <button onClick={this.reset}>reset</button>
//       <h1>Current:{this.state.count}</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class Ccomponent extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        input: '' // то что увидит пользователь
//     }
//     this.handleChange = this.handleChange.bind(this)

// }

// handleChange(event){ // метод у него есть парамет event когда метод вызывается он получает event объект содержащий строку текста от инпут элемента изменяю состояние через тот же самый event
//     this.setState({
//         input: event.target.value
//     })
// }

//     render() {
//     return (
//       <div>

//           <input onChange={this.handleChange}></input>
//           <h5>Controlled input:</h5>
//        <h3>{this.state.input}</h3>
//       </div>
//     )
//   }
// }

//------усложню чтобы текст выводился по нажатию на кнопку

// import React, { Component } from 'react'

// export default class Ccomponent extends Component {

//  constructor(props) {
//    super(props)

//    this.state = {
//       input: '',
//       sumbit: ''
//    }
//  this.handleChange = this.handleChange.bind(this)
//  this.handleSumbit=this.handleSumbit.bind(this)

// }

// handleChange(event){
//     this.setState({
//         input:event.target.value
//     });
// }

// handleSumbit(event){ // метод чтобы устанавливал свойства состояния компоненты sumbit на текущее входное значение в локальной системе стейт
//     event.preventDefault() // обработчик отправки чтобы предотвратить обновление веб страницы
//     this.setState({
//         sumbit:this.state.input
//     })
// }

//     render() {
//     return (
//       <div>
//       <form onSubmit={this.handleSumbit}>
//       <input value={this.state.input} onChange={this.handleChange}/>
//       <button type='sumbit'>Sumbit!</button>
//       </form>
//      <h3>{this.state.sumbit}</h3>
//       </div>
//     )
//   }
// }

// делаю todo react

import React, { Component } from "react";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSumbit(event) {
    event.preventDefault();
    this.setState({
      input: this.state.input,
      items: [...this.state.items, this.state.input],
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="sumbit">Sumbit!</button>
        </form>

        <ul>
          {this.state.items.map((item, index) => {
            <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
