import React, { useEffect, useState } from 'react';
import { CasesSelector } from '../CasesSelector/CasesSelector';
import { useHistory } from 'react-router-dom';
import { CaseCard } from '../CaseCard/CaseCard';
import { cases } from '../../consts/cases';
import './CasesContainer.css';
import { Fade } from 'react-reveal';

export const CasesContainer = (props) => {
    const [currentCase, setCurrentCase] = useState(parseInt(props.match.params.id));
    const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
    const [useFade, setUseFade] = useState(true);
    const selectorSize = windowWidth > 800 ? 'big' : 'small';

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

    const handleWidthChange = () => {
        setWindowWidth(document.body.clientWidth);
    };

    useEffect(() => {
       window.addEventListener('resize', handleWidthChange);
    });

    return (
        <div className='cases-container'>
            <CasesSelector
                size={selectorSize}
                active={currentCase}
                handleChange={handleCaseChange}
                handleSelectorChange={handleSelectorChange}
            />
            <Fade>
                <Fade when={useFade}>
                    <CaseCard case={cases[currentCase - 1]}/>
                </Fade>
            </Fade>
        </div>
    )
};