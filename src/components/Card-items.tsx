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
            <h2>{title}</h2>
            <p><b>Valor:</b>{value}</p>
        </div>
    )
}