interface Set {
    reps: number;
    weight: number;
}

interface Exercise {
    name: string;
    sets: Set[];
}

function getSets() : Set[]{
    return [
        {}
    ]
}

export default function Exercise({name, sets} : Exercise){
    return(
        <div className="exercise">
        <p>{name} </p>
        <p>{}</p>
        </div>
    );
}