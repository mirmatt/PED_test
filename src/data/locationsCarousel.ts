import north_location from "../images/north_sicily.jpg"
import south_location from "../images/south_sicily.jpg"
import west_location from "../images/west_sicily.webp"
import east_location from "../images/east_sicily.jpg"


interface Locations {
	image: string,
	section: string,
	count: number
}

const locationsCarousel:Locations[] = [
	{
		image : north_location,
		section: "North Sicily",
		count : 32
	},
	{
		image : south_location,
		section: "South Sicily",
		count : 16
	},
	{
		image : west_location,
		section: "West Sicily",
		count : 22
	},
	{
		image : east_location,
		section: "East Sicily",
		count : 18
	},
]

export default locationsCarousel