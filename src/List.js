import React, { Component } from 'react'
import "./List.css";


class List extends Component {
  render() {
    return (
      <div className={'listArea'}>
        <input name='filter' id='filter' placeholder={'Filter by name or phone'}/>

        <ul className={'list'}>
            <li>
                <span className={'name'}>Özal GÖKTAŞ</span>
                <span className={'phone'}> 235456464</span>
                <span className={'clearFix'}></span>
            </li>
            <li>
                <span className={'name'}>Ömer DOĞAN</span>
                <span className={'phone'}> 721456464</span>
                <span className={'clearFix'}></span>
            </li>
            <li>
                <span className={'name'}>Yaşar GÖKTAŞ</span>
                <span className={'phone'}> 869456464</span>
                <span className={'clearFix'}></span>
            </li>
        </ul>
      </div>
    )
  }
}
export default List;