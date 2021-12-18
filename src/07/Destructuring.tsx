import React, {useState} from 'react';
import {ManType} from "./07.test";


function useMaksimState(m: string) {
    return [m, function () {}]
}

const Destructuring: React.FC<ManType> = ({name, age, ...props}) => {
    // const {name, age, address} = props;
    // const[message,setMessage]=useState<string>("hello")

    const [message, setMessage] = useMaksimState("hello")

    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <hr/>
            <h3>{props.address.street.title}</h3>


            {/*<h1>{name}</h1>
            <h2>{age}</h2>
            <hr/>
            <h3>{address.street.title}</h3>*/}
        </div>
    );
};

export default Destructuring;