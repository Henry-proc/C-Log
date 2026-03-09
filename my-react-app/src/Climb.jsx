
export default function Climb({name , grade}){
    
    return(
        <div className="climb" id={name}>
            <h2 className = 'name'>
                {name}
            </h2>
            <h3 className = 'grade'>
                Grade: {grade}
            </h3>
            <p className = 'desc'>

            </p>
        </div>
    )
}