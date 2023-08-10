
import Card from './components/card/Card';
import { cars } from './constants/cars';

const App = () => {
	return (
		<>
			<div className='cards-container'>
				{/* <Card
					car='sedans'
					textContent='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				/>
				<Card
					car='suvs'
					textContent='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				/>
				<Card
					car='luxury'
					textContent='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
				/> */}

				{cars.map(car => (
					<Card 
					key={car.id} 
					car={car.name} 
					textContent={car.description}
					image={car.image} />
				))}
			</div>
		</>
	);
};

export default App;
