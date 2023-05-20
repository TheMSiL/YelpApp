import classicBurger from '../../assets/primary/menu/burger/1.png';
import Cheeseburger from '../../assets/primary/menu/burger/2.png';
import baconBurger from '../../assets/primary/menu/burger/3.png';
import mushroomSwissBurger from '../../assets/primary/menu/burger/4.png';
import bbqBurger from '../../assets/primary/menu/burger/5.png';
import spicyJalapenoBurger from '../../assets/primary/menu/burger/6.png';
import doubleCheeseburger from '../../assets/primary/menu/burger/7.png';
import veggieBurger from '../../assets/primary/menu/burger/8.png';
import d1 from '../../assets/primary/menu/donuts/d1.png';
import d2 from '../../assets/primary/menu/donuts/d2.png';
import d3 from '../../assets/primary/menu/donuts/d3.png';
import d4 from '../../assets/primary/menu/donuts/d4.png';
import d5 from '../../assets/primary/menu/donuts/d5.png';
import d6 from '../../assets/primary/menu/donuts/d6.png';
import n1 from '../../assets/primary/menu/drink/1.png';
import n2 from '../../assets/primary/menu/drink/2.png';
import n3 from '../../assets/primary/menu/drink/3.png';
import n4 from '../../assets/primary/menu/drink/4.png';
import n5 from '../../assets/primary/menu/drink/5.png';
import n6 from '../../assets/primary/menu/drink/6.png';
import p1 from '../../assets/primary/menu/pizza/1.png';
import p2 from '../../assets/primary/menu/pizza/2.png';
import p3 from '../../assets/primary/menu/pizza/3.png';
import p4 from '../../assets/primary/menu/pizza/4.png';
import p5 from '../../assets/primary/menu/pizza/5.png';
import p6 from '../../assets/primary/menu/pizza/6.png';
import p7 from '../../assets/primary/menu/pizza/7.png';
import p8 from '../../assets/primary/menu/pizza/8.png';
import s1 from '../../assets/primary/menu/salad/1.png';
import s2 from '../../assets/primary/menu/salad/2.png';
import s3 from '../../assets/primary/menu/salad/3.png';
import s4 from '../../assets/primary/menu/salad/4.png';
import s5 from '../../assets/primary/menu/salad/5.png';
import s6 from '../../assets/primary/menu/salad/6.png';

export const menuList = [
	{
		selector: 'All',
		positions: [],
	},
	{
		selector: 'Burgers',
		positions: [
			{
				name: 'Classic Burger',
				description: 'Juicy beef patty with lettuce and tomato',
				price: 9,
				img: classicBurger,
				type: 'Burgers',
			},
			{
				name: 'Cheeseburger',
				description: 'Classic burger with melted cheese',
				price: 10,
				img: Cheeseburger,
				type: 'Burgers',
			},
			{
				name: 'Bacon Burger',
				description: 'Burger topped with crispy bacon',
				price: 11,
				img: baconBurger,
				type: 'Burgers',
			},
			{
				name: 'Mushrooms Burger',
				description: 'Beef patty with sautéed mushrooms and Swiss cheese',
				price: 11,
				img: mushroomSwissBurger,
				type: 'Burgers',
			},
			{
				name: 'BBQ Burger',
				description: 'Burger with tangy BBQ sauce and onion rings',
				price: 12,
				img: bbqBurger,
				type: 'Burgers',
			},
			{
				name: 'Jalapeno Burger',
				description: 'Burger with jalapeno peppers and spicy mayo',
				price: 10,
				img: spicyJalapenoBurger,
				type: 'Burgers',
			},
			{
				name: 'Double Cheeseburger',
				description: 'Two beef patties with double the cheese',
				price: 13,
				img: doubleCheeseburger,
				type: 'Burgers',
			},
			{
				name: 'Veggie Burger',
				description: 'Plant-based patty with lettuce and tomato',
				price: 10,
				img: veggieBurger,
				type: 'Burgers',
			},
		],
	},
	{
		selector: 'Pizza',
		positions: [
			{
				name: 'Margherita Pizza',
				description: 'Classic pizza with tomato, mozzarella, and basil',
				price: 10,
				img: p1,
				type: 'Pizza',
			},
			{
				name: 'Pepperoni Pizza',
				description: 'Pizza topped with pepperoni and mozzarella',
				price: 11,
				img: p2,
				type: 'Pizza',
			},
			{
				name: 'Vegetarian Pizza',
				description: 'Pizza loaded with fresh vegetables and cheese',
				price: 12,
				img: p3,
				type: 'Pizza',
			},
			{
				name: 'BBQ Chicken Pizza',
				description: 'Pizza topped with BBQ chicken, onions, and cheese',
				price: 13,
				img: p4,
				type: 'Pizza',
			},
			{
				name: 'Mushroom Pizza',
				description: 'Pizza topped with mushrooms, garlic, and cheese',
				price: 12,
				img: p5,
				type: 'Pizza',
			},
			{
				name: 'Hawaiian Pizza',
				description: 'Pizza with ham, pineapple, and cheese',
				price: 11,
				img: p6,
				type: 'Pizza',
			},
			{
				name: "Meat Lover's Pizza",
				description: 'Pizza piled high with various meats and cheese',
				price: 14,
				img: p7,
				type: 'Pizza',
			},
			{
				name: 'Buffalo Pizza',
				description: 'Pizza with spicy buffalo chicken and blue cheese',
				price: 13,
				img: p8,
				type: 'Pizza',
			},
		],
	},
	{
		selector: 'Salads',
		positions: [
			{
				name: 'Caesar Salad',
				description:
					'Classic salad with romaine lettuce, croutons, and Caesar dressing',
				price: 7,
				img: s1,
				type: 'Salads',
			},
			{
				name: 'Greek Salad',
				description: 'Salad with fresh vegetables, feta cheese, and olives',
				price: 6,
				img: s2,
				type: 'Salads',
			},
			{
				name: 'Caprese Salad',
				description: 'Salad with tomatoes, mozzarella, and basil',
				price: 8,
				img: s3,
				type: 'Salads',
			},
			{
				name: 'Cobb Salad',
				description: 'Salad with chicken, bacon, avocado, and blue cheese',
				price: 10,
				img: s4,
				type: 'Salads',
			},
			{
				name: 'Spinach Salad',
				description: 'Salad with fresh spinach, strawberries, and almonds',
				price: 9,
				img: s5,
				type: 'Salads',
			},
			{
				name: 'Asian Salad',
				description:
					'Salad with mixed greens, mandarin oranges, and sesame dressing',
				price: 9,
				img: s6,
				type: 'Salads',
			},
		],
	},
	{
		selector: 'Donuts',
		positions: [
			{
				name: 'Glazed Donut',
				description: 'Classic donut with a sweet glaze',
				price: 2,
				img: d1,
				type: 'Donuts',
			},
			{
				name: 'Chocolate Donut',
				description: 'Rich chocolate donut with chocolate icing',
				price: 2.5,
				img: d2,
				type: 'Donuts',
			},
			{
				name: 'Sprinkle Donut',
				description: 'Colorful donut with sprinkles on top',
				price: 2,
				img: d3,
				type: 'Donuts',
			},
			{
				name: 'Maple Donut',
				description: 'Donut topped with maple glaze and crispy',
				price: 3,
				img: d4,
				type: 'Donuts',
			},
			{
				name: 'Blueberry Donut',
				description: 'Donut filled with blueberry jam',
				price: 2.5,
				img: d5,
				type: 'Donuts',
			},
			{
				name: 'Crunch Donut',
				description: 'Donut coated with caramel and crunchy toppings',
				price: 3,
				img: d6,
				type: 'Donuts',
			},
		],
	},
	{
		selector: 'Drinks',
		positions: [
			{
				name: 'Old Fashioned',
				description: 'Classic whiskey cocktail with bitters and sugar',
				price: 10,
				img: n1,
				type: 'Drinks',
			},
			{
				name: 'Cosmopolitan',
				description: 'Classic cocktail with vodka, cranberry juice, and lime',
				price: 8.5,
				img: n2,
				type: 'Drinks',
			},
			{
				name: 'Margarita',
				description: 'Tequila-based cocktail with lime and salt',
				price: 7.5,
				img: n3,
				type: 'Drinks',
			},
			{
				name: 'Pina Colada',
				description:
					'Tropical cocktail with rum, pineapple juice, and coconut cream',
				price: 9,
				img: n4,
				type: 'Drinks',
			},
			{
				name: 'Daiquiri',
				description: 'Frozen cocktail with rum and fruit flavor',
				price: 8,
				img: n5,
				type: 'Drinks',
			},
			{
				name: 'Mojito',
				description: 'Refreshing cocktail with mint, lime, and rum',
				price: 8,
				img: n6,
				type: 'Drinks',
			},
		],
	},
];
