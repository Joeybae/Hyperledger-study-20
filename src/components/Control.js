import React, {Component} from 'react';

class Control extends Component {
    render() {
      console.log('Subject render')
      return(
        <ul>
         <li><a href="/create" class="menuLink" onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('create');
         }.bind(this)}>create</a></li>
         <li><a href="/update" class="menuLink" onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('update');
         }.bind(this)}>update</a></li>
         <li><input onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('delete');
         }.bind(this)} type="button" value="delete"></input></li>
       </ul>
      );
    }
}

export default Control;