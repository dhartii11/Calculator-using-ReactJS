import React from 'react';
import KeypadRow from './KeyboardRow';
import Button from '../Button/Button'
import '../../styles/keyboard.css';

const buttons =[['CE','C','backspace','/'],['9','8','7','*'],['6','5','4','-'],['3','2','1','+'],['','0','.','=']]  ;


const keypad = (props) => {
    return (
        <section className="keypad">{
            buttons.map((ele)=>(
                 <KeypadRow>
                    <Button onButtonPress={props.onButtonPress} type="primary">{ele[0]}</Button>
                    <Button onButtonPress={props.onButtonPress} type="primary"><span>{ele[1]}</span></Button>
                    <Button onButtonPress={props.onButtonPress} type="primary">{ele[2]}</Button>
                    <Button onButtonPress={props.onButtonPress} type="operator">{ele[3]}</Button>
                </KeypadRow>
            
            ))
        }
        </section>
            
    );
  };
  

// const keypad = (props) => (
//     <section className="keypad">
   
//         <KeypadRow>
//             <Button onButtonPress={props.onButtonPress} type="primary">CE</Button>
//             <Button onButtonPress={props.onButtonPress} type="primary"><span>C</span></Button>
//             <Button onButtonPress={props.onButtonPress} type="primary">&larr;</Button>
//             <Button onButtonPress={props.onButtonPress} type="operator">/</Button>
//         </KeypadRow>
//         <KeypadRow>
//             <Button onButtonPress={props.onButtonPress}>9</Button>
//             <Button onButtonPress={props.onButtonPress}>8</Button>
//             <Button onButtonPress={props.onButtonPress}>7</Button>
//             <Button onButtonPress={props.onButtonPress} type="operator">*</Button>
//         </KeypadRow>
//         <KeypadRow>
//             <Button onButtonPress={props.onButtonPress}>6</Button>
//             <Button onButtonPress={props.onButtonPress}>5</Button>
//             <Button onButtonPress={props.onButtonPress}>4</Button>
//             <Button onButtonPress={props.onButtonPress} type="operator">-</Button>
//         </KeypadRow>
//         <KeypadRow>
//             <Button onButtonPress={props.onButtonPress}>3</Button>
//             <Button onButtonPress={props.onButtonPress}>2</Button>
//             <Button onButtonPress={props.onButtonPress}>1</Button>
//             <Button onButtonPress={props.onButtonPress} type="operator">+</Button>
//         </KeypadRow>
//         <KeypadRow>
//             <Button disabled></Button>
//             <Button onButtonPress={props.onButtonPress}>0</Button>
//             <Button onButtonPress={props.onButtonPress}>.</Button>
//             <Button onButtonPress={props.onButtonPress}>=</Button>
//         </KeypadRow>
//     </section>
// );
export default keypad;