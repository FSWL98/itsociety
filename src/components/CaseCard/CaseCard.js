import React from 'react';
import { Link } from 'react-router-dom';
import './CaseCard.css';

export const CaseCard = (props) => (
    <div className='case-card'>
        <h3 className='case-card_name'>{props.case.name}</h3>
        <h4 className='case-card_title'>{props.case.title}</h4>
        <div className='case-card_text'>{props.case.text}</div>
        <div className='case-card_info'>Ознакомиться со списком победителей, можно нажав кнопку «Лучшие команды кейса».</div>
        <button className='case-card_teams'><Link to={`/cases/${props.case.id}/teams`}>Лучшие команды кейса</Link></button>
    </div>
);