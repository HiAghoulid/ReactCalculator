import React,{useState} from 'react'
import {keysList} from './helpers/keysList'

export default function CalculatorBody() {

    const [keyInput,setKeyInput] = useState('')
    const [previusValue,setPreviusValue] = useState(0)
    const [opKey,setOpKey] = useState('')

    function operation(key){
        if(key !== '=' ){
            switch (key){
                case 'CE' :
                    setKeyInput('')
                    setPreviusValue(0)
                    setOpKey('')
                    break;
                case 'C' :
                    setKeyInput(keyInput.slice(0,keyInput.length-1))
                    break;
                default :
                    setKeyInput('')
                    setOpKey(key)
                    console.log('current : '+keyInput)
                    console.log('prev : '+previusValue)
            }
        }else{
            switch(opKey){
                case '+' :
                    setPreviusValue(parseFloat(previusValue)+ parseFloat(keyInput))
                    setKeyInput('')
                    break;
                case '-' :
                    setPreviusValue(parseFloat(previusValue)- parseFloat(keyInput))
                    setKeyInput('')
                    break;
                case 'x' :
                    setPreviusValue(parseFloat(previusValue)* parseFloat(keyInput))
                    setKeyInput('')
                    break;
                case '/' :
                    setPreviusValue(parseFloat(previusValue)/ parseFloat(keyInput))
                    setKeyInput('')
                    break;
                case '%' :
                    setPreviusValue(parseInt(previusValue)% parseInt(keyInput))
                    setKeyInput('')
                    break;
                default :
                    break
            }
        }
    }

    const keyInputHandler = (key) =>{
        if(isNaN(key) && key !== '.'){
            operation(key)
        }else{
            if(key ==='.' && keyInput.includes('.'))
                return
            if(key === '.' && keyInput ==='')
                return
            setKeyInput(prev => (`${prev}${key}`))
        }
    }

  return (
    <div className='calc-body'>
        <div className='result-screen'>
            <div className='opearionSign'>{opKey}</div>
            <div className='result-screen-right'>
                <div className='re previous'>{previusValue}</div>
                <div className='re current'>{keyInput}</div>
            </div>
        </div>
        <div className='keys-screen'>
            {
                keysList.map(
                    (keys,index)=><button 
                        className={keys.clsName}
                        key={index}
                        onClick={()=>keyInputHandler(keys.symbole)}
                    >{keys.symbole}</button>
                )
            }
        </div>
    </div>
  )
}

