
interface Options {
	"Experiences" : string[],
	"Locations" : string[],
	"Airports" : string[],
	"Bedrooms" : string[]
}

const Experiences: string[] = [
	"Cooking Experiences",
	"Sicily Outdoors",
	"The history of Sicily",
	"Drawn by the Sea"
]

const Locations: string[] = [
	"North Sicily",
	"South Sicily",
	"West Sicily",
	"East Sicily",
]

const Airports: string[] = [
	"Catania",
	"Palermo",
	"Trapani",
	"Comiso"
]

const Bedrooms: string[] = [
	"1-2",
	"2",
	"3",
	"4-5"
]

const options:Options = {
	"Experiences" : Experiences,
	"Locations" : Locations,
	"Airports" : Airports,
	"Bedrooms" : Bedrooms
}

export default options