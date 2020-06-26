import React, { useEffect, useState } from 'react';
import { CasesSelector } from '../CasesSelector/CasesSelector';
import { useHistory } from 'react-router-dom';
import { CaseCard } from '../CaseCard/CaseCard';
import { cases } from '../../consts/cases';
import './CasesContainer.css';
import { Fade } from 'react-reveal';

export const CasesContainer = (props) => {
    const [currentCase, setCurrentCase] = useState(parseInt(props.match.params.id));
    const [useFade, setUseFade] = useState(true);

    const history = useHistory();

    const handleCaseChange = (ev, caseNumber) => {
        setCurrentCase(caseNumber);
        setUseFade(false);
        setTimeout(() => setUseFade(true), 100);
        history.push(`/cases/${caseNumber}`);
    };

    const handleSelectorChange = (ev) => {
        setUseFade(false);
        setTimeout(() => setUseFade(true), 100);
        setCurrentCase(parseInt(ev.target.value));
        history.push(`/cases/${ev.target.value}`);
    };

    const handleButtonClick = () => {
        history.push(`/cases/${currentCase}/teams`);
    };

    const rerender = () => {
        setUseFade(false);
        setTimeout(() => setUseFade(true), 100);
    };

    useEffect(() => {
       window.addEventListener('resize', rerender);
       return () => {
           window.removeEventListener('resize', rerender);
       }
    });

    return (
        <div className='cases-container'>
            <CasesSelector
                active={currentCase}
                handleChange={handleCaseChange}
                handleSelectorChange={handleSelectorChange}
            />
            <Fade>
                <Fade when={useFade}>
                    <CaseCard case={cases[currentCase - 1]} handleButtonClick={handleButtonClick}/>
                </Fade>
            </Fade>
        </div>
    )
};