import React from 'react';
import { cases } from '../../consts/cases';
import './CasesSelector.css';

export const CasesSelector = (props) => {
    return document.body.clientWidth > 800 ? (
            <div className='selector-wrapper'>
                {cases.map((el) => (
                    <div
                        className={'case-item' + (el.id === props.active ? ' active' : '')}
                        key={el.id}
                        onClick={(ev) => props.handleChange(ev, el.id)}
                    >
                            кейс #{el.id} | {el.owner}
                    </div>
                ))}
            </div>
        ) :
        (
            <div className='select-wrapper'>
            <select value={props.active} onChange={props.handleSelectorChange} className='case-selector'>
                {cases.map((el) => (
                    <option value={el.id} key={el.id} className='case-option'>Кейс #{el.id} | {el.owner}</option>
                ))}
            </select>
            </div>
        );
};