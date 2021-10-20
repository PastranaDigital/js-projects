import { shuffleArray } from './helper.js';

export const shuffleQuestionOrder = function () {
	shuffleArray(state.questionBank);
};

export const updateNumOfQuestions = function (newNumber) {
	state.totals.totalSelectedQuestions = newNumber;
	// console.log('state.totals.totalSelectedQuestions: ', state.totals.totalSelectedQuestions);
};

export const state = {
	totals: {
		correctAnswers: 0,
		totalSelectedQuestions: 10,
		currentQuestion: 1,
	},
	questionBank: [
		{
			question: 'Demolition of the Berlin Wall separating East and West Germany began in what year?',
			answers: ['1989@correct', '1990', '1982', '1986'],
		},
		{
			question: 'How long is an Olympic swimming pool (in meters)?',
			answers: ['50 meters@correct', '35 meters', '25 meters', '100 meters'],
		},
		{
			question: 'How many countries still have the shilling as currency?',
			answers: ['Four@correct', 'Ten', 'One', 'Two'],
		},
		{
			question: 'How many languages are written from right to left?',
			answers: ['12@correct', '10', '8', '7'],
		},
		{
			question: 'Which singer’s real name is Stefani Joanne Angelina Germanotta?',
			answers: ['Lady Gaga@correct', 'Cher', 'Madonna', 'Beyonce'],
		},
		{
			question: 'Which country did not make up the original Axis powers in World War II?',
			answers: ['Russia@correct', 'Germany', 'Italy', 'Japan'],
		},
		{
			question: 'Which chess piece can only move diagonally?',
			answers: ['Bishop@correct', 'Queen', 'Pawn', 'Rook'],
		},
		{
			question: 'What geometric shape is generally used for stop signs?',
			answers: ['Octagon@correct', 'Hexagon', 'Triangle', 'Quadrilateral'],
		},
		{
			question: 'Cynophobia is a fear of...',
			answers: ['Dogs@correct', 'Memes', 'Lightning', 'Phobias'],
		},
		{
			question: 'What is the name of the biggest technology company in South Korea?',
			answers: ['Samsung@correct', 'Cisco', 'Qualcomm', 'Huawei'],
		},
		{
			question: 'What is the name of the largest ocean on earth?',
			answers: ['Pacific Ocean@correct', 'Atlantic Ocean', 'Indian Ocean', 'Artic Ocean'],
		},
		{
			question: 'What is the name of the man who launched eBay back in 1995?',
			answers: ['Pierre Omidyar@correct', 'Elon Musk', 'Patrick Bay', 'Kevin Systrom'],
		},
		{
			question: 'What dinosaur fossil was originally mistaken for a type of bison?',
			answers: ['Triceratops@correct', 'Tyrannosaurus', 'Ankylosaurus', 'Diplodocus'],
		},
		{
			question: 'How many neck bones does a giraffe have?',
			answers: ['Seven@correct', 'Eight', 'Nine', 'Twelve'],
		},
		{
			question: 'Which animal can be seen on the Porsche logo?',
			answers: ['Horse@correct', 'Dragon', 'Lion', 'Griffin'],
		},
		{
			question: 'Which country do cities of Perth, Adelade & Brisbane belong to?',
			answers: ['Australia@correct', 'Norway', 'Germany', 'Scotland'],
		},
		{
			question: "Which monarch officially made Valentine's Day a holiday in 1537?",
			answers: ['Henry VIII@correct', 'William II', 'Elizabeth I', 'Richard III'],
		},
		{
			question: 'How many Earths could fit inside the sun?',
			answers: ['1.3 million@correct', '1,300', '3 million', '300,000'],
		},
		{
			question: 'Who was the first woman pilot to fly solo across the Atlantic?',
			answers: ['Amelia Earhart@correct', 'Bessie Coleman', 'Amy Johnson', 'Joan of Arc'],
		},
		{
			question: 'Marie Curie, the first woman to win a Nobel Prize, was awarded in?',
			answers: ['1903@correct', '1889', '1743', '1851'],
		},
		{
			question: 'Worship of Krishna is observed by which Religious Faith?',
			answers: ['Hinduism@correct', 'Judaism', 'Islam', 'Buddhism'],
		},
		{
			question: '“Stars and Stripes” is the nickname of the flag of which country?',
			answers: ['United States of America@correct', 'England', 'New Zealand', 'Tunisia'],
		},
		{
			question: 'How many colors are there in the rainbow?',
			answers: ['Seven@correct', 'Eight', 'Six', 'Nine'],
		},
		{
			question: 'In little red riding hood, who does the wolf dress up as?',
			answers: ['Grandmother@correct', 'Grandfather', 'Mother', 'Father'],
		},
		{
			question: 'In the poem Humpty Dumpty, where was Humpty when he fell?',
			answers: ['The wall@correct', 'The store', 'The garden', 'The lake'],
		},
		{
			question: 'On the farm, what is a kid?',
			answers: ['A baby goat@correct', 'A bundle of hay', 'A small tractor', 'A wheelbarrow'],
		},
		{
			question: 'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
			answers: ['Six@correct', 'Five', 'Four', 'Three'],
		},
		{
			question: 'What country is responsible for creating the Olympic Games?',
			answers: ['Greece@correct', 'Italy', 'Germany', 'England'],
		},
		{
			question: 'What were Jack and Jill going up the hill to fetch?',
			answers: ['A pale of water@correct', 'A sandwich', 'A pint of milk', 'A jug of juice'],
		},
		{
			question: 'Who is the patron saint of Ireland?',
			answers: ['St. Patrick@correct', 'St. Michael', 'St. Stephen', 'St. John'],
		},
		{
			question: 'Who was the first president of the United States?',
			answers: ['George Washington@correct', 'John Adams', 'Alexander Hamilton', 'Thomas Jefferson'],
		},
		{
			question: 'Where would you find the Sea of Tranquility?',
			answers: ['The Moon@correct', 'Jupiter', 'Mars', 'Saturn'],
		},
		{
			question: 'From which country does Gouda cheese originate?',
			answers: ['Netherlands@correct', 'Germany', 'Poland', 'Italy'],
		},
		{
			question: 'What is the common name for dried plums?',
			answers: ['Prunes@correct', 'Figs', 'Raisins', 'Dates'],
		},
		{
			question: 'What is the most consumed manufactured drink in the world?',
			answers: ['Tea@correct', 'Lemonade', 'Orange Juice', 'Coffee'],
		},
		{
			question: 'What is the name given to Indian food cooked over charcoal in a clay oven?',
			answers: ['Tandoori@correct', 'Bhuna', 'Chapati', 'Baghar'],
		},
		{
			question: 'What is the rarest M&M color?',
			answers: ['Brown@correct', 'Orange', 'Blue', 'Red'],
		},
		{
			question: 'What was the first soft drink in space?',
			answers: ['Coca Cola@correct', 'Dr Pepper', 'Pepsi', 'Sprite'],
		},
		{
			question: 'Which country consumes the most chocolate per capita?',
			answers: ['Switzerland@correct', 'United States', 'Iceland', 'Germany'],
		},
		{
			question: 'Which country invented ice cream?',
			answers: ['China@correct', 'Iceland', 'Italy', 'United States'],
		},
		{
			question: 'Which is the only edible food that never goes bad?',
			answers: ['Honey@correct', 'Peanuts', 'Dried Beans', 'Brown Rice'],
		},
		{
			question: 'Which single has sold more copies worldwide?',
			answers: ['Candle in the Wind@correct', 'Bohemian Rhapsody', 'Beat It', 'I Will Always Love You'],
		},
		{
			question: 'What are the names of Cinderella’s stepsisters?',
			answers: [
				'Anastasia and Drizella@correct',
				'Anna and Drizella',
				'Angelica and Drizella',
				'Adrianna and Drizella',
			],
		},
		{
			question: 'In which video game did Super Mario first appear?',
			answers: ['Donkey Kong@correct', 'Mario Bros', 'Duck Hunt', 'Dr Mario'],
		},
		{
			question: 'What famous US festival hosted over 350,000 fans in 1969?',
			answers: ['Woodstock@correct', 'Austin City Limits', 'Coachella', 'Lollapalooza'],
		},
		{
			question: 'What TV series showed the first interracial kiss on American network television?',
			answers: ['Star Trek@correct', 'Doctor Who', 'Days of Our Lives', 'I Love Lucy'],
		},
		{
			question: 'What was the first Disney feature-length animated movie ever released?',
			answers: ['Snow White and the Seven Dwarfs@correct', 'Pinocchio', 'Dumbo', 'Bambi'],
		},
		{
			question: 'What was the first toy to be advertised on television?',
			answers: ['Mr. Potato Head@correct', 'Slinky', 'Red Rider BB Gun', 'Oscar Meyer Whistle'],
		},
		{
			question: 'Who was not one of the four main characters in the TV series "Golden Girls"?',
			answers: ['Barbara@correct', 'Dorothy', 'Rose', 'Sophia'],
		},
		{
			question: 'Which member of the Beatles married Yoko Ono?',
			answers: ['John Lennon@correct', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
		},
		{
			question: 'Who created Sherlock Holmes?',
			answers: ['Arthur Conan Doyle@correct', 'Charles Dickens', 'William Shakespeare', 'F. Scott Fitzgerald'],
		},
		{
			question: 'Dump, floater, and wipe are terms used in which team sport?',
			answers: ['Volleyball@correct', 'Football', 'Rugby', 'Baseball'],
		},
		{
			question: 'What is the name of the professional ice hockey team based in Toronto, Canada?',
			answers: ['Toronto Maple Leafs@correct', 'Toronto Lightning', 'Toronto Canucks', 'Toronto Raptors'],
		},
		{
			question: 'What sport is the most popular sport in the world?',
			answers: ['Soccer@correct', 'Cricket', 'Hockey', 'Tennis'],
		},
		{
			question: 'Which country won the first-ever soccer World Cup in 1930?',
			answers: ['Uruguay@correct', 'Argentina', 'Brazil', 'England'],
		},
		{
			question: 'How much weight can an ant lift?',
			answers: [
				'50 times its weight@correct',
				'10 times its weight',
				'25 times its weight',
				'100 times its weight',
			],
		},
		{
			question:
				'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?',
			answers: [
				'1972 Miami Dolphins@correct',
				'2007 New England Patriots',
				'2009 Indianapolis Colts',
				'2015 Carolina Panthers',
			],
		},
		{
			question:
				'Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during WWII?',
			answers: ['Fort Knox@correct', 'White House', 'Library of Congress', 'Under the Washington Monument'],
		},
		{
			question: 'Which garden is considered to be among the Seven Wonders of the Ancient World?',
			answers: [
				'The Hanging Gardens of Babylon@correct',
				'Gardens of Versailles',
				'Nong Nooch Tropical Botanical Garden',
				'Kew Royal Botanic Gardens',
			],
		},
		{
			question: 'Which kind of bulbs were once exchanged as a form of currency?',
			answers: ['Tulips@correct', 'Daffodils', 'Lillies', 'Roses'],
		},
		{
			question: 'Who was the first gymnast to score a perfect 10 score?',
			answers: ['Nadia Comaneci@correct', 'Carly Patterson', 'Olga Korbut', 'Mary Lou Retton'],
		},
		{
			question: 'Area 51 is located in which state?',
			answers: ['Nevada@correct', 'California', 'Utah', 'Arizona'],
		},
		{
			question: 'What’s the diameter of a basketball hoop in inches?',
			answers: ['18 inches@correct', '20 inches', '16 inches', '21 inches'],
		},
		{
			question: 'Which boxer fought against Muhammad Ali and was the first to defeat him?',
			answers: ['Joe Frazier@correct', 'Sonny Liston', 'George Foreman', 'Henry Cooper'],
		},
		{
			question: 'A sporting event is held every year on Memorial Day. What is it?',
			answers: [
				'Indianapolis 500@correct',
				'Yankees vs Red Sox',
				'UEFA Champions League Final',
				'The Triple Crown',
			],
		},
		{
			question: 'The ancient Phoenician city of Constantine is located in what modern-day Arab country?',
			answers: ['Algeria@correct', 'Egypt', 'Lebanon', 'Morocco'],
		},
		{
			question: 'What country has the most natural lakes?',
			answers: ['Canada@correct', 'Brazil', 'Norway', 'Russia'],
		},
		{
			question: 'What country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?',
			answers: ['India@correct', 'Thailand', 'Bangladesh', 'Myanmar'],
		},
		{
			question: "What is Earth's largest continent?",
			answers: ['Asia@correct', 'Antartica', 'Africa', 'North America'],
		},
		{
			question: 'In which winter sport are the terms “stale fish” and “mule kick” used?',
			answers: ['Snowboarding@correct', 'Lacrosse', 'Golf', 'Boat Racing'],
		},
		{
			question: 'For what movie did Tom Hanks score his first Academy Award nomination?',
			answers: ['Big@correct', 'Forrest Gump', 'Saving Private Ryan', "Charlie Wilson's War"],
		},
		{
			question: 'A group of ravens is known as?',
			answers: ['unkindness@correct', 'flock', 'gaggle', 'parliament'],
		},
		{
			question: 'How long do elephant pregnancies last?',
			answers: ['22 months@correct', '12 months', '18 months', '20 months'],
		},
		{
			question: 'How many hearts does an octopus have?',
			answers: ['3@correct', '2', '1', '1.5'],
		},
		{
			question: 'What movie does Jack Nicholson say, "Here\'s Johnny!"',
			answers: [
				'The Shining@correct',
				"One Flew Over the Cuckoo's Nest",
				'A Few Good Men',
				'The Silence of the Lambs',
			],
		},
		{
			question: 'The name of which African animal means "river horse"?',
			answers: ['Hippopotamus@correct', 'Rhinoceros', 'Crocodile', 'Wildebeest'],
		},
		{
			question: 'The unicorn is the national animal of which country?',
			answers: ['Scotland@correct', 'Greenland', 'Finland', 'Netherlands'],
		},
		{
			question: 'What African country has Portuguese as its official language?',
			answers: ['Mozambique@correct', 'Zimbabwe', 'Tanzania', 'Angola'],
		},
		{
			question: 'What is the loudest animal on Earth?',
			answers: ['Sperm Whale@correct', 'Bulldog Bat', 'Green Grocer Cicada', 'Howler Monkeys'],
		},
		{
			question: 'What mammals lay eggs?',
			answers: ['Platypus@correct', 'Beaver', 'Otter', 'Dolphin'],
		},
		{
			question: 'What type of animal is a Flemish giant?',
			answers: ['Rabbit@correct', 'Cat', 'Pig', 'Horse'],
		},
		{
			question: 'How many teeth does an adult human have?',
			answers: ['32@correct', '36', '40', '28'],
		},
		{
			question: 'What is the tallest mountain in Canada?',
			answers: ['Mount Logan@correct', 'Mount Saint Elias', 'Mount Robson', 'Mount Columbia'],
		},
		{
			question: 'In what type of matter are atoms most tightly packed?',
			answers: ['Solids@correct', 'Plasma', 'Gas', 'Liquid'],
		},
		{
			question: 'Which African country was formerly known as Abyssinia?',
			answers: ['Ethiopia@correct', 'Egypt', 'Sudan', 'Somalia'],
		},
		{
			question: 'After Brazil, what is the second largest country in South America?',
			answers: ['Argentina@correct', 'Chile', 'Paraguay', 'Peru'],
		},
		{
			question: 'By what name is the parallel of latitude 23.5 degrees North of the equator commonly known?',
			answers: ['Tropic of Cancer@correct', 'The Venus Line', 'Aurora Borealis', 'Equatorial Boundary'],
		},
		{
			question: 'Which planet takes 9h 55m (Earth time) for one full rotation?',
			answers: ['Jupiter@correct', 'Venus', 'Mars', 'Mercury'],
		},
		{
			question: 'Which Apple device was first released in 2007?',
			answers: ['iPhone@correct', 'MacBook', 'iPod', 'AppleTV'],
		},
		{
			question: 'What tissues connect the muscles to the bones?',
			answers: ['Tendons@correct', 'Ligaments', 'Cartilage', 'Neuron'],
		},
		{
			question: 'Newton’s 2nd Law of Motion states that...',
			answers: ['F = m*a@correct', 'D = r*t', 'E = m*c^2', 'P = m*v'],
		},
		{
			question: 'What was the first state?',
			answers: ['Delaware@correct', 'Pennsylvania', 'New Jersey', 'Connecticut'],
		},
		{
			question: 'What color is not on the Norwegian flag?',
			answers: ['Green@correct', 'Red', 'White', 'Blue'],
		},
		{
			question: 'Kodiak island is part of which US state?',
			answers: ['Alaska@correct', 'Maine', 'Washington', 'Oregon'],
		},
		{
			question: 'How long does it take to hard boil an egg?',
			answers: ['Seven Minutes@correct', 'Twelve Minutes', 'Four Minutes', 'Two Minutes'],
		},
		{
			question: 'What’s the hardest rock?',
			answers: ['Diamond@correct', 'Corundum', 'Topaz', 'Quartz'],
		},
		{
			question: 'How many bones do sharks have in their bodies?',
			answers: ['None@correct', '18', '48', '122'],
		},
		{
			question: 'What is the third sign of the zodiac?',
			answers: ['Gemini@correct', 'Sagittarius', 'Aquarius', 'Libra'],
		},
		{
			question: 'When did the Cold War end?',
			answers: ['1989@correct', '1985', '1992', '1981'],
		},
		{
			question: 'Which company owns Bugatti, Lamborghini, Audi, Porsche, and Ducati?',
			answers: ['Volkswagen@correct', 'Alfa Romeo', 'Ford', 'Toyota'],
		},
	],
};
