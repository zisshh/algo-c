import React, { useEffect } from 'react'
import { useState } from 'react';

export default function AddNumber(props) {

    const [number, setNumber] = useState([]);
    const handleOnChange = (e)=>{
        let arr = e.target.value.split(',');
        let correctArr = [];
        for(let i = 0; i<arr.length; i++){
            if(isNaN(arr[i]) === false){
                correctArr.push(arr[i]);
            }
            else{
                console.log("NaN entered");
            }
        }
        setNumber([...correctArr]);
    }
      
    const handleEnter = (e)=>{
        if(e.key === 'Enter' && !props.disabled){
            handleOnClick(e);
        }
    }

    const getHeights = (number)=>{
        let numberMax = Number.MIN_VALUE;
        let numberMin = Number.MAX_VALUE;
        for(let i = 0; i<number.length; i++){
            if(parseInt(numberMax) < parseInt(number[i])){
                numberMax = parseInt(number[i]);
            }
            if(parseInt(numberMin) > parseInt(number[i])){
                numberMax = parseInt(number[i]);
            }
        }
        if(parseInt(numberMax) > parseInt(props.maxHeight)){
            props.setMaxHeight(parseInt(numberMax));
        }
        if(parseInt(numberMin) < parseInt(props.minHeight)){
            props.setMinHeight(parseInt(numberMin));
        }
    }
    const handleOnClick = (e)=>{
        e.preventDefault();

        getHeights(number);
        let newData = [];
        for(let i = 0; i<number.length; i++){
            newData.push({
                value: parseInt(number[i]),
                bgColor: "#ffffff",
                textColor: 'red'
            })
        }
        props.setData((currData)=>{
            return [...currData, ...newData];
        })

        props.setRawData((currData)=>[...currData, ...newData]);
    }

    const handleOnReset = ()=>{
        props.setData([...props.rawData]);
    }

    const handleOnDelete = ()=>{
        props.setData([]);
        props.setRawData([]);
    }

    return (
        <div className="input-group mb-3"
        style={{width:"40vw"}}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter ',' Seperated nums"
                aria-label="Number"
                aria-describedby="button-addon2"
                value={number}
                onChange={handleOnChange}
                onKeyDown={handleEnter}
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleOnClick}
                disabled={props.disabled}
            >
                Enter
            </button>

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleOnReset}
                disabled={props.disabled}
            >
                Reset Data
            </button>

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleOnDelete}
                disabled={props.disabled}
            >
                Delete Data
            </button>
            
        </div>
    )
}
