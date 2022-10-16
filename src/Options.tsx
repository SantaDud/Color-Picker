import { useRef } from 'react';

interface Props{
    color: string;
    options: string[];
    setup: () => void;
}

const Options: React.FC<Props> = ({ color, options, setup }) => {
    const btn1Ref = useRef<HTMLButtonElement>(null);
    const btn2Ref = useRef<HTMLButtonElement>(null);
    const btn3Ref = useRef<HTMLButtonElement>(null);

    const checkAnswer = (ref: React.RefObject<HTMLButtonElement>) => {
        if (ref.current?.textContent === color)
            console.log("Correct");

        else
            console.log(`Wrong\n Correct Answer is: ${color}`);
        
        setup();
    }
    
    return (
        <div className="option-btn">
            <button className="btn" ref={ btn1Ref } onClick = {() => checkAnswer(btn1Ref)}>{options[0]}</button>
            <button className="btn" ref={ btn2Ref } onClick = {() => checkAnswer(btn2Ref)}>{options[1]}</button>
            <button className="btn" ref={ btn3Ref } onClick = {() => checkAnswer(btn3Ref)}>{options[2]}</button>
        </div>
    );
}

export default Options;