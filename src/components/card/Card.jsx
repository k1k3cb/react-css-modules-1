import Button from '../button/Button';
import style from './card.module.css';

const Card = ({ car, textContent, image }) => {
	return (
		<div className={` ${style.card} ${style[`card-${car}`]}`}>
			<div className={style.container}>
				<img src={image} alt={`imagen del ${car}`} />
				<h2 className={style.title}>{car.toUpperCase()}</h2>
				<p className={style.description}>{textContent}</p>

				<Button carType={car}/>
			</div>
		</div>
	);
};

export default Card;
