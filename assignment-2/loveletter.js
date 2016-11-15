
var chance = require('chance').Chance(); 

var wrap = require('word-wrap'); 

var program = require("commander");

program
	.version('0.0.1')
	.option('-w , --width [value]', 'width')
	.option('-s,--sentence [value]', 'Sentence')
	.parse(process.argv);

const first = ['HELLO', 'HEY', 'DEAR', 'HI'];

const second = ['HUN', 'BABE', 'CUTIE', 'SWEETIE'];

const adjectives = ['CUTE', 'PRETTY', 'AMAZING', 'ANGELIC', 'AGILE', 'STUNNING', 'GRACEFUL', 'BURNING', 'BLISSFUL', 'CRAVING', 'LUSTFUL', 'DARLING', 'DEAR', 'DEVOTED', 'EXCITED', 'DAZZLING', 'JUBILANT', 'FOND', 'IMPATIENT', 'STUDIOUS', 'LITTLE', 'LOVEABLE', 'LUMINOUS', 'WONDERFUL', 'PASSIONATE', 'BIG', 'SWEET', 'SYMPATHETIC', 'TENDER', 'UNSATISFIED', 'TINY'];

const nouns = ['LUST', 'AFFECTION', 'ADMIRATION', 'PLEASURE', 'ARDOUR', 'IMPRESS', 'DESIRE', 'DEVOTION', 'BOYFRIEND', 'ENCHANTMENT', 'ENTHUSIASM', 'FANCY', 'FELLOW FEELING', 'FERVOUR', 'FONDNESS', 'HEART', 'HUNGER', 'INFATUATION', 'LIKING', 'LONGING', 'LOVE', 'LOVER', 'PASSION', 'PITTY', 'SYMPATHY', 'TENDERNESS', 'THIRST', 'WISH', 'YEARNING'];

const adverbs = ['AMAZINGINGLY', 'ANXIOUSLY', 'SWIFTLY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'CAREFULLY', 'GRACEFULLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'SEXAULLY'];

const verbs = ['ADVISE', 'ATTRACTS', 'TAKE CARE OF', 'CHERISHES', 'CLINGS TO', 'DESIRES','HOLDS DEAR', 'CRAVES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LIKES', 'LIGHTS UP', 'LOVES', 'LUSTS AFTER', 'OVERTAKES', 'OVERWHELMES', 'PRIZES', 'INFLAMES', 'TAKES CONTROL', 'THIRSTS FOR', 'TREASURES', 'FULES', 'WISHES', 'WOOS', 'URGESES'];


var letter = "";

function choice(array){
	var index = chance.natural({"min": 0, "max": array.length -1});
	return array[index];
}

function select(array){
	if (chance.bool()){
		return choice(array);
	} else {
		return"";
	}
}

function together(){
	return select(adjectives) + " " + choice(nouns) + " " + choice(verbs) + " " + select(adverbs) + " " + select(adjectives) + " " + choice(nouns) + ".";
} 

var container = choice(first) + " " + choice(second) + ", \n\n";

for(var i=0; i < program.sentence; i++){
	container = container + together() + " ";
	// container += together() + " ";
}

container = container + "\n\n" + "Poet John.";

console.log("\n\n");
console.log(wrap(container, {"width": program.width}));
console.log("\n\n");


