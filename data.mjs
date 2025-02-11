export const steel = ['100Х13М', '110Х18М-ШД', '50Х14МФ', '40Х10С2М (ЭИ-107)']

export const trademark = ['WUESTHOF', 'ЗИК', 'ЗЛАТКО', 'ЗОК', 'АиР']

export const knives = [
	{
		id: 1,
		name: 'Нож Пантера',
		price: 1899.0,
		article: 'AF0000001952',
		trademark: 'WUESTHOF',
		series: 'Precision Pro',
		inStock: true,
		image: 'pantera1.jpg',
		images: [
			'pantera1.jpg',
			'pantera2.jpg',
			'pantera3.jpg',
			'pantera4.jpg',
			'pantera5.jpg',
		],
		discount: 40,
		steel: '100Х13М',
		rating: 4,
		description:
			'Высококачественный универсальный нож с эргономичной рукояткой и лезвием из прочной стали. Подходит для резки овощей, мяса и хлеба.',
	},
	{
		id: 2,
		name: 'Нож Потрошитель (ножны из кайдекса) ',
		price: 2999.0,
		article: 'AF0000002953',
		trademark: 'ЗИК',
		series: 'Chef Master',
		inStock: false,
		image: 'ripper1.jpg',
		images: [
			'ripper1.jpg',
			'ripper2.jpg',
			'ripper3.jpg',
			'ripper4.jpg',
			'ripper5.jpg',
		],
		discount: 0,
		steel: '110Х18М-ШД',
		rating: 5,
		description:
			'Идеальный нож для профессиональных поваров. Длинное лезвие позволяет легко нарезать крупные куски мяса, рыбы и овощей.',
	},
	{
		id: 3,
		name: 'Нож дамаск мельхиор',
		price: 1796.39,
		article: 'AF7678548783',
		trademark: 'WUESTHOF',
		series: 'Grand Prix II',
		inStock: true,
		image: 'damask1.jpg',
		images: [
			'damask1.jpg',
			'damask2.jpg',
			'damask3.jpg',
			'damask4.jpg',
			'damask5.jpg',
		],
		discount: 50,
		steel: '100Х13М',
		rating: 5,
		description:
			'This series offers knives with an ergonomic design for comfortable use in the kitchen.',
	},
	{
		id: 4,
		name: 'Нож Рысь',
		price: 1633.8,
		article: 'AF3390657340',
		trademark: 'ЗОК',
		series: 'Classic Ikon',
		inStock: true,
		image: 'lynx1.jpg',
		images: ['lynx1.jpg', 'lynx2.jpg', 'lynx3.jpg', 'lynx4.jpg', 'lynx5.jpg'],
		discount: 30,
		steel: '100Х13М',
		rating: 3,
		description:
			'This series offers knives with an ergonomic design for comfortable use in the kitchen.',
	},
	{
		id: 5,
		name: 'Нож Флагман',
		price: 1794.67,
		article: 'AF5523841911',
		trademark: 'ЗИК',
		series: 'X Series',
		inStock: true,
		image: 'flagship1.jpg',
		images: [
			'flagship1.jpg',
			'flagship2.jpg',
			'flagship3.jpg',
			'flagship4.jpg',
			'flagship5.jpg',
		],
		discount: 40,
		steel: '100Х13М',
		rating: 4,
		description:
			'Made with precision, this knife is ideal for both slicing and chopping with ease.',
	},
	{
		id: 6,
		name: 'Нож Атака',
		price: 2699.99,
		article: 'AF6623847293',
		trademark: 'WUESTHOF',
		series: 'Grand Prix II',
		inStock: false,
		image: 'attack1.jpg',
		images: ['attack1.jpg', 'attack1.jpg', 'attack2.jpg', 'attack3.jpg'],
		discount: 50,
		steel: '110Х18М-ШД',
		rating: 5,
		description:
			'Профессиональный шеф-нож с долговечным лезвием для нарезки и разделки мяса, рыбы и овощей.',
	},
	{
		id: 7,
		name: 'Нож Малыш',
		price: 1599.5,
		article: 'AF7236586345',
		trademark: 'ЗИК',
		series: 'Fishing Gear',
		inStock: true,
		image: 'baby1.jpg',
		images: ['baby1.jpg', 'baby2.jpg', 'baby3.jpg', 'baby4.jpg', 'baby5.jpg'],
		discount: 30,
		steel: '100Х13М',
		rating: 4,
		description:
			'Нож для рыболовов, имеет острие, специально разработанное для резки рыбы и мяса.',
	},
	{
		id: 8,
		name: 'Нож Якут №4 сталь дамаск кованый дол',
		price: 1999.99,
		article: 'AF9947283947',
		trademark: 'ЗЛАТКО',
		series: "Butcher's Choice",
		inStock: true,
		image: 'yakut1.jpg',
		images: [
			'yakut1.jpg',
			'yakut2.jpg',
			'yakut3.jpg',
			'yakut4.jpg',
			'yakut5.jpg',
		],
		discount: 0,
		steel: '110Х18М-ШД',
		rating: 4,
		description:
			'Нож с острым лезвием, идеально подходящий для разделки мяса и других твердых продуктов.',
	},
	{
		id: 9,
		name: 'Узбекский нож',
		price: 2499.99,
		article: 'AF2348732904',
		trademark: 'АиР',
		series: 'Chef Select',
		inStock: true,
		image: 'uzbek1.jpg',
		images: [
			'uzbek1.jpg',
			'uzbek2.jpg',
			'uzbek3.jpg',
			'uzbek4.jpg',
			'uzbek5.jpg',
		],
		discount: 30,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Нож с высокой износостойкостью, предназначенный для профессиональной кухни.',
	},
	{
		id: 10,
		name: 'Нож Классика (скримшоу) формованные ножны',
		price: 2199.0,
		article: 'AF1239481920',
		trademark: 'WUESTHOF',
		series: 'Professional Line',
		inStock: false,
		image: 'classic1.jpg',
		images: [
			'classic1.jpg',
			'classic2.jpg',
			'classic3.jpg',
			'classic4.jpg',
			'classic5.jpg',
		],
		discount: 40,
		steel: '100Х13М',
		rating: 3,
		description:
			'Идеален для нарезки мяса, рыбы и деликатных продуктов. Отличается прочностью и легкостью в использовании.',
	},
	{
		id: 11,
		name: 'Нож Комар (рукоять шишка в акриле) ',
		price: 2699.99,
		article: 'AF1829348741',
		trademark: 'ЗИК',
		series: 'Survival Gear',
		inStock: true,
		image: 'mosquito1.jpg',
		images: [
			'mosquito1.jpg',
			'mosquito2.jpg',
			'mosquito3.jpg',
			'mosquito4.jpg',
			'mosquito5.jpg',
		],
		discount: 50,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 5,
		description:
			'Компактный и надежный нож для выживания в условиях дикой природы.',
	},
	{
		id: 12,
		name: 'Нож Перо (вставки акрил синий - мельхиор)',
		price: 2799.0,
		article: 'AF7293849201',
		trademark: 'ЗЛАТКО',
		series: 'Wild Series',
		inStock: true,
		image: 'feather1.jpg',
		images: [
			'feather1.jpg',
			'feather2.jpg',
			'feather3.jpg',
			'feather4.jpg',
			'feather5.jpg',
		],
		discount: 0,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Прочный нож для охотников, отлично подходит для разделки мяса и работы в сложных условиях.',
	},
	{
		id: 13,
		name: 'Сербский нож (камень, кап клена синий)',
		price: 2299.5,
		article: 'AF4938493045',
		trademark: 'АиР',
		series: 'Professional Cut',
		inStock: true,
		image: 'serbian1.jpg',
		images: [
			'serbian1.jpg',
			'serbian2.jpg',
			'serbian3.jpg',
			'serbian4.jpg',
			'serbian5.jpg',
		],
		discount: 30,
		steel: '100Х13М',
		rating: 5,
		description:
			'Нож для опытных поваров, с острым лезвием и устойчивым к износу покрытием.',
	},
	{
		id: 14,
		name: 'Нож Викинг',
		price: 1599.0,
		article: 'AF3928401938',
		trademark: 'ЗИК',
		series: 'Kitchen Essentials',
		inStock: true,
		image: 'viking1.jpg',
		images: [
			'viking1.jpg',
			'viking2.jpg',
			'viking3.jpg',
			'viking4.jpg',
			'viking5.jpg',
		],
		discount: 50,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 4,
		description:
			'Отличный нож для нарезки хлеба и других мягких продуктов с плотной коркой.',
	},
	{
		id: 15,
		name: 'Нож Стрела (рог буйвола, кап клена коричневый)',
		price: 2199.99,
		article: 'AF3849203947',
		trademark: 'WUESTHOF',
		series: 'Marine Tools',
		inStock: false,
		image: 'arrow1.jpg',
		images: [
			'arrow1.jpg',
			'arrow2.jpg',
			'arrow3.jpg',
			'arrow4.jpg',
			'arrow5.jpg',
		],
		discount: 40,
		steel: '50Х14МФ',
		rating: 5,
		description:
			'Прочные ножи с острым лезвием, предназначенные для разделки рыбы и морепродуктов.',
	},
	{
		id: 16,
		name: 'Нож Самурай (деревянные ножны) на подставке',
		price: 1599.5,
		article: 'AF4820398473',
		trademark: 'ЗИК',
		series: 'Home Kitchen',
		inStock: true,
		image: 'samurai1.jpg',
		images: [
			'samurai1.jpg',
			'samurai2.jpg',
			'samurai3.jpg',
			'samurai4.jpg',
			'samurai5.jpg',
		],
		discount: 30,
		steel: '100Х13М',
		rating: 4,
		description:
			'Отличный нож для нарезки овощей и фруктов с удобной рукояткой и острым лезвием.',
	},
	{
		id: 17,
		name: 'Нож Дамский',
		price: 2399.0,
		article: 'AF1839203847',
		trademark: 'АиР',
		series: 'Gourmet Collection',
		inStock: false,
		image: 'ladies1.jpg',
		images: [
			'ladies1.jpg',
			'ladies2.jpg',
			'ladies3.jpg',
			'ladies4.jpg',
			'ladies5.jpg',
		],
		discount: 40,
		steel: '110Х18М-ШД',
		rating: 5,
		description:
			'Нож для профессиональной нарезки стейков и других мясных продуктов. Обеспечивает точность и легкость в работе.',
	},
	{
		id: 18,
		name: 'Кухонный Топорик',
		price: 2999.5,
		article: 'AF3847388291',
		trademark: 'ЗЛАТКО',
		series: 'Heavy Duty',
		inStock: true,
		image: 'kitchen-hatchet1.jpg',
		images: [
			'kitchen-hatchet1.jpg',
			'kitchen-hatchet2.jpg',
			'kitchen-hatchet3.jpg',
			'kitchen-hatchet4.jpg',
			'kitchen-hatchet5.jpg',
		],
		discount: 50,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 5,
		description:
			'Мощный нож с толстым лезвием для работы с твердыми костями и другими трудными продуктами.',
	},
	{
		id: 19,
		name: 'Нож Филейный средний',
		price: 1899.99,
		article: 'AF2748392039',
		trademark: 'WUESTHOF',
		series: 'Marine Tools',
		inStock: true,
		image: 'fillet-knife1.jpg',
		images: [
			'fillet-knife1.jpg',
			'fillet-knife2.jpg',
			'fillet-knife3.jpg',
			'fillet-knife4.jpg',
			'fillet-knife5.jpg',
		],
		discount: 30,
		steel: '100Х13М',
		rating: 5,
		description:
			'Отличный нож для нарезки рыбы и морепродуктов. Лезвие сохраняет свою остроту даже при длительном использовании.',
	},
	{
		id: 20,
		name: 'Нож Судак малый',
		price: 1799.0,
		article: 'AF7482739402',
		trademark: 'ЗИК',
		series: 'Culinary Classics',
		inStock: false,
		image: 'small-pike-perch1.jpg',
		images: [
			'small-pike-perch1.jpg',
			'small-pike-perch2.jpg',
			'small-pike-perch3.jpg',
			'small-pike-perch4.jpg',
			'small-pike-perch5.jpg',
		],
		discount: 0,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Идеален для нарезки хлеба с мягким мякишем и хрустящей коркой. Остриё сохраняет свою остроту длительное время.',
	},
	{
		id: 21,
		name: 'Нож Легион',
		price: 2499.0,
		article: 'AF4938392839',
		trademark: 'АиР',
		series: 'Precision Line',
		inStock: true,
		image: 'legion1.jpg',
		images: [
			'legion1.jpg',
			'legion2.jpg',
			'legion3.jpg',
			'legion4.jpg',
			'legion5.jpg',
		],
		discount: 30,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 5,
		description:
			'Мощный нож с гибким лезвием для удобной разделки мяса и рыбы. Отличная устойчивость к износу.',
	},
	{
		id: 22,
		name: 'Нож Скат',
		price: 2799.99,
		article: 'AF2848293842',
		trademark: 'ЗЛАТКО',
		series: "Chef's Choice",
		inStock: true,
		image: 'skat1.jpg',
		images: ['skat1.jpg', 'skat2.jpg', 'skat3.jpg', 'skat4.jpg'],
		discount: 40,
		steel: '100Х13М',
		rating: 5,
		description:
			'Профессиональный шеф-нож с идеально заточенным лезвием для работы с мясом, рыбой и овощами.',
	},
	{
		id: 23,
		name: 'Нож Финт',
		price: 2199.0,
		article: 'AF3294872498',
		trademark: 'АиР',
		series: 'Utility Tools',
		inStock: false,
		image: 'feint1.jpg',
		images: [
			'feint1.jpg',
			'feint2.jpg',
			'feint3.jpg',
			'feint4.jpg',
			'feint5.jpg',
		],
		discount: 50,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Многофункциональный нож с возможностью использования для различных задач на кухне и в походах.',
	},
	{
		id: 24,
		name: 'Нож Зубатка',
		price: 1699.5,
		article: 'AF2837463201',
		trademark: 'ЗИК',
		series: 'Fresh Cut',
		inStock: true,
		image: 'catfish1.jpg',
		images: [
			'catfish1.jpg',
			'catfish2.jpg',
			'catfish3.jpg',
			'catfish4.jpg',
			'catfish5.jpg',
		],
		discount: 30,
		steel: '100Х13М',
		rating: 5,
		description:
			'Специально предназначен для нарезки овощей, с тонким и острым лезвием для точной работы.',
	},
	{
		id: 25,
		name: 'Нож Лесной, карельская берёза фиолетовая',
		price: 1799.0,
		article: 'AF4938293845',
		trademark: 'WUESTHOF',
		series: 'Classic Line',
		inStock: true,
		image: 'forest1.jpg',
		images: [
			'forest1.jpg',
			'forest2.jpg',
			'forest3.jpg',
			'forest4.jpg',
			'forest5.jpg',
		],
		discount: 50,
		steel: '110Х18М-ШД',
		rating: 5,
		description:
			'Отличный нож для разделки хлеба с хрустящей коркой и мягким мякишем. Удобен в использовании и долговечен.',
	},
	{
		id: 26,
		name: 'Нож Гладиатор',
		price: 2999.99,
		article: 'AF1029384756',
		trademark: 'ЗИК',
		series: 'Pro Chef',
		inStock: true,
		image: 'gladiator1.jpg',
		images: ['gladiator1.jpg', 'gladiator2.jpg', 'gladiator3.jpg'],
		discount: 30,
		steel: '50Х14МФ',
		rating: 5,
		description:
			'Профессиональный шеф-нож с острым лезвием для точной нарезки. Идеален для нарезки мяса, рыбы и овощей.',
	},
	{
		id: 27,
		name: 'Нож Глухарь',
		price: 1499.0,
		article: 'AF7382916472',
		trademark: 'АиР',
		series: 'Fruit Tools',
		inStock: true,
		image: 'capercaillie1.jpg',
		images: [
			'capercaillie1.jpg',
			'capercaillie2.jpg',
			'capercaillie3.jpg',
			'capercaillie4.jpg',
			'capercaillie5.jpg',
		],
		discount: 40,
		steel: '100Х13М',
		rating: 4,
		description:
			'Удобный нож для чистки фруктов и овощей с острым и гибким лезвием.',
	},
	{
		id: 28,
		name: 'Нож Соболь',
		price: 1899.99,
		article: 'AF3847583923',
		trademark: 'ЗЛАТКО',
		series: 'Marine Tools',
		inStock: false,
		image: 'sable1.jpg',
		images: ['sable1.jpg', 'sable2.jpg', 'sable3.jpg'],
		discount: 50,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 5,
		description:
			'Идеальный нож для работы с рыбой. Лезвие сохраняет свою остроту при длительном использовании.',
	},
	{
		id: 29,
		name: 'Нож разведчика НР-40',
		price: 2699.0,
		article: 'AF4975738291',
		trademark: 'WUESTHOF',
		series: 'Premium Series',
		inStock: true,
		image: 'scout1.jpg',
		images: [
			'scout1.jpg',
			'scout2.jpg',
			'scout3.jpg',
			'scout4.jpg',
			'scout5.jpg',
		],
		discount: 30,
		steel: '110Х18М-ШД',
		rating: 4,
		description:
			'Высококачественный нож для разделки мяса с длинным лезвием и удобной рукояткой.',
	},
	{
		id: 30,
		name: 'Нож Сафари',
		price: 2999.0,
		article: 'AF7283649271',
		trademark: 'ЗИК',
		series: 'Wild Adventure',
		inStock: false,
		image: 'safari1.jpg',
		images: ['safari1.jpg', 'safari2.jpg', 'safari3.jpg', 'safari4.jpg'],
		discount: 40,
		steel: '100Х13М',
		rating: 5,
		description:
			'Прочный нож с надежной рукояткой для охоты. Лезвие идеально подходит для работы в полевых условиях.',
	},
	{
		id: 31,
		name: 'Финка НКВД (рукоять чёрный граб - литьё, мозаичный пин)',
		price: 2299.5,
		article: 'AF5647382847',
		trademark: 'АиР',
		series: 'Survival Tools',
		inStock: true,
		image: 'finka1.jpg',
		images: [
			'finka1.jpg',
			'finka2.jpg',
			'finka3.jpg',
			'finka4.jpg',
			'finka5.jpg',
		],
		discount: 30,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Многофункциональный нож с набором инструментов для различных ситуаций в походах и на природе.',
	},
	{
		id: 32,
		name: 'Нож Боевой офицер',
		price: 1799.0,
		article: 'AF3928472837',
		trademark: 'ЗЛАТКО',
		series: 'Baking Series',
		inStock: true,
		image: 'combat-officer-knife1.jpg',
		images: [
			'combat-officer-knife1.jpg',
			'combat-officer-knife2.jpg',
			'combat-officer-knife3.jpg',
			'combat-officer-knife4.jpg',
			'combat-officer-knife5.jpg',
		],
		discount: 0,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 5,
		description:
			'Специализированный нож для нарезки хлеба. Лезвие позволяет легко разрезать хлеб с хрустящей коркой.',
	},
	{
		id: 33,
		name: 'Нож Скин-Ду, рукоять обточена под камень',
		price: 2999.5,
		article: 'AF5738292847',
		trademark: 'WUESTHOF',
		series: 'Professional Line',
		inStock: true,
		image: 'skin-doo1.jpg',
		images: [
			'skin-doo1.jpg',
			'skin-doo2.jpg',
			'skin-doo3.jpg',
			'skin-doo4.jpg',
			'skin-doo5.jpg',
		],
		discount: 40,
		steel: '50Х14МФ',
		rating: 5,
		description:
			'Профессиональный шеф-нож для нарезки мяса и овощей с оптимальной длиной лезвия.',
	},
	{
		id: 34,
		name: 'Нож Соболёк',
		price: 2599.0,
		article: 'AF3947382736',
		trademark: 'ЗИК',
		series: "Hunter's Series",
		inStock: false,
		image: 'sobolek1.jpg',
		images: ['sobolek1.jpg', 'sobolek2.jpg', 'sobolek3.jpg', 'sobolek4.jpg'],
		discount: 30,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 4,
		description:
			'Нож для работы с твердыми костями и разделки мяса. Идеален для использования в условиях охоты.',
	},
	{
		id: 35,
		name: 'Нож Лиса',
		price: 1899.0,
		article: 'AF2837461827',
		trademark: 'АиР',
		series: 'Fishing Gear',
		inStock: true,
		image: 'fox1.jpg',
		images: ['fox1.jpg', 'fox2.jpg', 'fox3.jpg'],
		discount: 40,
		steel: '110Х18М-ШД',
		rating: 5,
		description:
			'Идеальный нож для рыболовов с прочным лезвием и удобной рукояткой. Лезвие сохраняет остроту при длительном использовании.',
	},
	{
		id: 36,
		name: 'Нож Самурай малый',
		price: 2899.99,
		article: 'AF3928472928',
		trademark: 'ЗИК',
		series: 'Gourmet Series',
		inStock: true,
		image: 'small-samurai1.jpg',
		images: [
			'small-samurai1.jpg',
			'small-samurai2.jpg',
			'small-samurai3.jpg',
			'small-samurai4.jpg',
			'small-samurai5.jpg',
		],
		discount: 30,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Универсальный шеф-нож, идеально подходящий для нарезки и подготовки продуктов. Лезвие устойчиво к износу и ржавчине.',
	},
	{
		id: 37,
		name: 'Нож Барсук',
		price: 2499.0,
		article: 'AF9283748129',
		trademark: 'АиР',
		series: 'Precision Slicing',
		inStock: false,
		image: 'badger1.jpg',
		images: ['badger1.jpg', 'badger2.jpg', 'badger3.jpg'],
		discount: 50,
		steel: '100Х13М',
		rating: 4,
		description:
			'Тонкое и острое лезвие, которое идеально подходит для слайсинга мяса и рыбы. Прочный и надежный инструмент.',
	},
	{
		id: 38,
		name: 'Нож Самурай большой',
		price: 2199.5,
		article: 'AF7283949201',
		trademark: 'ЗЛАТКО',
		series: 'Fishmaster',
		inStock: true,
		image: 'samurai-large1.jpg',
		images: [
			'samurai-large1.jpg',
			'samurai-large2.jpg',
			'samurai-large3.jpg',
			'samurai-large4.jpg',
		],
		discount: 40,
		steel: '50Х14МФ',
		rating: 5,
		description:
			'Идеальный нож для рыбалки с гибким лезвием, которое позволяет точно разделать рыбу, не повреждая ее.',
	},
	{
		id: 39,
		name: 'Нож Судак большой',
		price: 2799.99,
		article: 'AF9483740123',
		trademark: 'ЗИК',
		series: 'Hunting Tools',
		inStock: true,
		image: 'large-pike_perch1.jpg',
		images: [
			'large-pike_perch1.jpg',
			'large-pike_perch2.jpg',
			'large-pike_perch3.jpg',
		],
		discount: 30,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 4,
		description:
			'Охотничий нож с прочным лезвием и рукояткой из высококачественных материалов. Отлично подходит для работы в полевых условиях.',
	},
	{
		id: 40,
		name: 'Нож Судак',
		price: 3099.0,
		article: 'AF9483741234',
		trademark: 'WUESTHOF',
		series: 'Classic Series',
		inStock: true,
		image: 'pike-perch1.jpg',
		images: ['pike-perch1.jpg', 'pike-perch2.jpg', 'pike-perch3.jpg'],
		discount: 40,
		steel: '100Х13М',
		rating: 5,
		description:
			'Качественный шеф-нож с идеальным балансом и острым лезвием, что позволяет легко нарезать продукты.',
	},
	{
		id: 41,
		name: 'Нож Сокол',
		price: 2999.5,
		article: 'AF7382738473',
		trademark: 'ЗЛАТКО',
		series: 'Tactical Line',
		inStock: true,
		image: 'falcon1.jpg',
		images: ['falcon2.jpg', 'falcon3.jpg'],
		discount: 50,
		steel: '110Х18М-ШД',
		rating: 5,
		description:
			'Нож для выживания с прочным лезвием и удобной рукояткой для экстремальных условий.',
	},
	{
		id: 42,
		name: 'Нож Таран, рукоять стабилизированная карельская берёза - мельхиор',
		price: 2599.99,
		article: 'AF7382948732',
		trademark: 'АиР',
		series: 'Heavy Duty',
		inStock: false,
		image: 'ram1.jpg',
		images: ['ram1.jpg', 'ram2.jpg', 'ram3.jpg', 'ram4.jpg'],
		discount: 40,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Мощный нож для разделки крупного мяса с толстым лезвием и прочной рукояткой.',
	},
	{
		id: 43,
		name: 'Нож Барсук',
		price: 2699.0,
		article: 'AF7382918372',
		trademark: 'ЗИК',
		series: 'Artisan Series',
		inStock: true,
		image: 'badger-orange1.jpg',
		images: ['badger-orange1.jpg', 'badger-orange2.jpg', 'badger-orange3.jpg'],
		discount: 30,
		steel: '40Х10С2М (ЭИ-107)',
		rating: 5,
		description:
			'Прекрасный нож для резьбы по мясу и карвинга. Лезвие обладает исключительной остротой.',
	},
	{
		id: 44,
		name: 'Нож Барсук',
		price: 3199.0,
		article: 'AF7382738241',
		trademark: 'WUESTHOF',
		series: 'Elite Series',
		inStock: true,
		image: 'badger-black1.jpg',
		images: ['badger-black1.jpg', 'badger-black2.jpg', 'badger-black3.jpg'],
		discount: 50,
		steel: '100Х13М',
		rating: 4,
		description:
			'Профессиональный шеф-нож с уникальной геометрией лезвия и превосходной остротой.',
	},
	{
		id: 45,
		name: 'Нож Легион',
		price: 1399.0,
		article: 'AF7382748472',
		trademark: 'ЗЛАТКО',
		series: 'Everyday Carry',
		inStock: true,
		image: 'legion-black1.jpg',
		images: ['legion-black1.jpg', 'legion-black2.jpg', 'legion-black3.jpg'],
		discount: 40,
		steel: '50Х14МФ',
		rating: 5,
		description:
			'Компактный и легкий нож для повседневного ношения с устойчивым лезвием.',
	},
	{
		id: 46,
		name: 'Нож Викинг ',
		price: 2899.0,
		article: 'AF9283749734',
		trademark: 'ЗИК',
		series: 'Hunter Series',
		inStock: true,
		image: 'viking-black1.jpg',
		images: ['viking-black1.jpg', 'viking-black2.jpg', 'viking-black3.jpg'],
		discount: 30,
		steel: '50Х14МФ',
		rating: 4,
		description:
			'Нож с прочным лезвием, предназначенный для использования в сложных природных условиях. Прекрасно подходит для охоты и активного отдыха.',
	},
	{
		id: 47,
		name: 'Нож Таран',
		price: 3099.5,
		article: 'AF7283947283',
		trademark: 'АиР',
		series: 'Gourmet Collection',
		inStock: false,
		image: 'ram-orange1.jpg',
		images: ['ram-orange1.jpg', 'ram-orange2.jpg', 'ram-orange3.jpg'],
		discount: 50,
		steel: '100Х13М',
		rating: 5,
		description:
			'Профессиональный шеф-нож с идеальным балансом для точных нарезок. Лезвие выдерживает продолжительную работу без заточки.',
	},
	{
		id: 48,
		name: 'Нож Лиса',
		price: 2399.99,
		article: 'AF9283749247',
		trademark: 'ЗЛАТКО',
		series: 'Outdoor Essentials',
		inStock: true,
		image: 'fox-sandstone1.jpg',
		images: ['fox-sandstone1.jpg', 'fox-sandstone2.jpg', 'fox-sandstone3.jpg'],
		discount: 40,
		steel: '50Х14МФ',
		rating: 5,
		description:
			'Нож для рыбалки с эргономичной рукояткой и стойким лезвием, идеально подходящий для разделки рыбы и других рыболовных задач.',
	},
	{
		id: 49,
		name: 'Нож Гладиатор ',
		price: 3199.0,
		article: 'AF7382917363',
		trademark: 'ЗИК',
		series: 'Survival Series',
		inStock: true,
		image: 'gladiator-orange1.jpg',
		images: [
			'gladiator-orange1.jpg',
			'gladiator-orange2.jpg',
			'gladiator-orange3.jpg',
		],
		discount: 50,
		steel: '110Х18М-ШД',
		rating: 4,
		description:
			'Нож с высокой прочностью и особым дизайном, предназначенный для выживания в экстремальных условиях. Отличается долговечностью и устойчивостью к нагрузкам.',
	},
	{
		id: 50,
		name: 'Нож Глухарь',
		price: 2499.99,
		article: 'AF9283748219',
		trademark: 'АиР',
		series: 'Explorer Gear',
		inStock: false,
		image: 'capercaillie-chocolate1.jpg',
		images: [
			'capercaillie-chocolate1.jpg',
			'capercaillie-chocolate2.jpg',
			'capercaillie-chocolate3.jpg',
		],
		discount: 40,
		steel: '100Х13М',
		rating: 4,
		description:
			'Компактный и удобный нож для туристов и путешественников. С этим ножом легко справиться с любыми задачами в походах.',
	},
	{
		id: 51,
		name: 'Нож Рысь',
		price: 2799.0,
		article: 'AF9283747632',
		trademark: 'WUESTHOF',
		series: 'Professional Line',
		inStock: true,
		image: 'lynx-chocolate1.jpg',
		images: [
			'lynx-chocolate1.jpg',
			'lynx-chocolate2.jpg',
			'lynx-chocolate3.jpg',
		],
		discount: 50,
		steel: '100Х13М',
		rating: 5,
		description:
			'Нож с точной геометрией лезвия, предназначенный для профессиональных кулинаров. Отличается высоким качеством и длительным сроком службы.',
	},
]
