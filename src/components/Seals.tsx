import organic from "../assets/images/organic5.png";
import vegan from "../assets/images/vegan.png";
import provenance from "../assets/images/Provenance.png";
import co2Neutral from "../assets/images/co2.png";
export const Seals = () => {
	interface sealsProps {
		image: JSX.Element;
		description: string;
	}

	const seals: sealsProps[] = [
		{
			image: <img src={organic} alt="Logo" className="h-20 w-auto" />,
			description: "",
		},
		{
			image: <img src={vegan} alt="Logo" className="h-20 w-auto" />,
			description: "",
		},
		{
			image: <img src={co2Neutral} alt="Logo" className="h-20 w-auto" />,
			description: "",
		},
		{
			image: <img src={provenance} alt="Logo" className="h-20 w-auto" />,
			description: "",
		},
	];

	return (
		<section id="statistics">
			<div className="grid grid-cols-4 lg:grid-cols-4 gap-1">
				{seals.map(({ image, description }) => (
					<div key={image.props.src} className="space-y-2 text-center">
						<h2 className="text-3xl sm:text-4xl font-bold ">{image}</h2>
						<p className="text-xl text-muted-foreground">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
