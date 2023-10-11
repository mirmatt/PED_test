import { SvgIconComponent } from "@mui/icons-material";
import DiamondIcon from '@mui/icons-material/Diamond';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GroupIcon from '@mui/icons-material/Group';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

interface Services {
	iconType: SvgIconComponent,
	title: string,
	text: string
}

const serviceCarousel:Services[] = [
	{
		iconType: DiamondIcon,
		title: "High Quality Assured",
		text: "A stunning collection of high-quality villas suitable for all group sizes in some of Sicility's top locations."
	},
	{
		iconType: StarOutlineIcon,
		title : "Outstanding Service",
		text : "Superb attention to details from your first enquiry and 24/7 assistance once you have arrived in Sicily.",
	},
	{
		iconType: GroupIcon,
		title : "Local Team",
		text : "Get detailed advice from ourlocal team who know our villas and the island inside out.",
	},
	{
		iconType: AutoFixHighIcon,
		title : "Extra Services",
		text : "Choose from a wide range of Extra Services, from cookery to wine tasting, to enhance your holiday.",
	},
	{
		iconType: CardGiftcardIcon,
		title : "E-Travel Pack",
		text : "All your travel and comprehensive local information will be supplied in a convenient user-friendly Travel Pack.",
	}
]

export default serviceCarousel