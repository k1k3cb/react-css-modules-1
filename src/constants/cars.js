import { v4 } from "uuid";

export const cars = [
	{
		id: v4(),
		name: 'sedans',
		description:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		image: '/assets/images/icon-sedans.svg'
	},
	{
		id: v4(),
		name: 'suvs',
		description:
			'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		image: '/assets/images/icon-suvs.svg'
	},
	{
		id: v4(),
		name: 'luxury',
		description:
			'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		image: '/assets/images/icon-luxury.svg'
	}
];
