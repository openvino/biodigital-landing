import klerosLogo from "../assets/kleros.svg";
import zamaLogo from "../assets/images/zamaLogo.png";
import zkLogo from "../assets/images/zkLogo.png";
interface SponsorProps {
	icon: JSX.Element;
	name: string;
}

const sponsors: SponsorProps[] = [
	{
		icon: <img src={klerosLogo} alt="Logo" className="h-20 w-auto mr-4" />,
		name: "Kleros",
	},
	{
		icon: <img src={zamaLogo} alt="Logo" className="h-12 w-auto mr-4" />,
		name: "Zama",
	},
	{
		icon: <img src={zkLogo} alt="Logo" className="h-12 w-auto mr-4" />,
		name: "zkLogo",
	},
];

export const Sponsors = () => {
	return (
		<section id="sponsors" className="container pt-0  sm:py-8 ">
			<h2 className="text-center text-md lg:text-xl font-bold mb-2 text-primary">
				Powered by
			</h2>

			<div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
				{sponsors.map(({ icon }, index) => (
					<div
						key={index}
						className="flex items-center gap-1 text-muted-foreground/60"
					>
						<span>{icon}</span>
					</div>
				))}
			</div>
		</section>
	);
};
