
export interface NavElement {
	label: string,
	path : string
}

const navigationLinks:NavElement[] = [
	{
		label : "Destinations",
		path : "/Destionations"
	},
	{
		label : "Villas",
		path : "/Villas"
	},
	{
		label : "Experiences",
		path : "/Experiences"
	},
	{
		label : "Guides",
		path : "/Guides"
	},
	{
		label : "About",
		path : "/About"
	},
	{
		label : "Journal",
		path : "/Journal"
	},
	{
		label : "Contact",
		path : "/Contact"
	}
]

export default navigationLinks