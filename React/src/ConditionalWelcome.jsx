import { AgeFunc } from "./Age";

export function WelcomeCond({name, age}){
    return (
        <div>
            <p>Welcome, <strong>{name}</strong></p>
            {(age>=18) && <AgeFunc years={age} />}
            {/* {age && <AgeFunc years={age}/>} */}
            {/* {(age>=18) && (age<65) && <AgeFunc years={age}/>} */}
            {/* {(age>=18) && (age<65) && name === 'John' && <AgeFunc years={age}/>} */}
            {(age<18) && <p>You are very young!</p>} 
        </div>
    )
}

//Now it has the conditional with less than 18 years