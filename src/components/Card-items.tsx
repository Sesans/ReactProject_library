import "../styles/Card-items.css";

interface CardProps {
    value: number;
    title: string;
    description: string;
    image: string;
    onClick?: () => void;

}

export function Card({ value, image, description, title, onClick} : CardProps){
    return(
        <div className="card" onClick={onClick}>
            <img className="card-img" src={image}/>
            <h2 className="card-title">{title}</h2>
            <p className="card-value"><b>Valor:</b>{value}</p>
        </div>
    )
}