import React from 'react';
import { teams } from '../../consts/teams';
import { cases } from '../../consts/cases';
import { Link } from 'react-router-dom';
import back from '../TeamsList/back.svg';
import './TeamsList.css';
import { Fade } from 'react-reveal';

export const TeamsList = (props) => (
    <Fade>
        <div className='team-list'>
            <div className='team-list_header'>
                <Link to={`/cases/${props.match.params.id}`}><img src={back} alt='back' color='white'/></Link>
                <div className='team-list_header__title'>Лучшие команды Онлайн-Хакатона #1</div>
            </div>
            <div className='team-list_case-info'>
                <div className='team-list_case-info__item'>
                    <span className='team-list_case-info__item-text'>Кейс партнера</span>
                    <span className='team-list_case-info__item-name'>{cases[props.match.params.id - 1].owner}</span>
                </div>
                <div className='team-list_case-info__item'>
                    <span className='team-list_case-info__item-text'>Тематика кейса</span>
                    <span className='team-list_case-info__item-name'>{cases[props.match.params.id - 1].name}</span>
                </div>
            </div>
            <ul className='team-list_ul'>
                {teams.map((team) => (
                    <li className='team-list_item' key={team.name}>
                        <span className='team-list_item__place'>{team.place} место</span>
                        <div className='team-list_item__team'>
                            <span className='team'>Команда:</span>
                            <span className='team-list_item__team-name'>{team.name}</span>
                        </div>
                        <div className='team-list_item__members-wrapper'>
                            {team.members.map((member) => (
                                <div className='team-list_item__member' key={member.secondName}>
                                    <span className='name'>{member.secondName}</span>
                                    <span className='name'>{member.firstName}</span>
                                    <span className='city'>{member.city}</span>
                                </div>
                            ))}
                        </div>
                    </li>
                )) }
            </ul>
        </div>
    </Fade>
);