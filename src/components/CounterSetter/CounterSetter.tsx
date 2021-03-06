import s from './CounterSetter.module.scss'
import React, {ChangeEvent} from "react";
import {Button} from "../Button/Button";

type PropsType = {
    startValue: number
    endValue: number
    errorStatus: boolean
    settingsApplied: boolean
    setStartValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    applyNewValues: () => void
}

export const CounterSetter: React.FC<PropsType> = ({startValue, endValue, errorStatus, setStartValue, setMaxValue, applyNewValues, settingsApplied}) => {

    const errorStyle = () => errorStatus ? s.error : ''

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const changeEndValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    return (
        <div className={s.counterSet}>
            <div className={s.setSettingsWrapper}>
                <div className={s.inputRow}>
                    <span>Start value:</span>
                    <input className={`${s.input} ${errorStyle()}`} type="number" value={startValue} onChange={changeStartValue}/>
                </div>
                <div className={s.inputRow}>
                    <span>Max value:</span>
                    <input className={`${s.input} ${errorStyle()}`} type="number" value={endValue} onChange={changeEndValue}/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button onClick={applyNewValues} disabled={errorStatus || settingsApplied}>
                    Apply settings
                </Button>
            </div>
        </div>
    )
}