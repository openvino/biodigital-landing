import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import rulesImage from "../assets/images/rules.svg";
import evidencesImage from "../assets/images/evidence.png";
import justiceImage from "../assets/images/justiciaKleros.png";
interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "1) Certification Requirements",
		description:
			"We first define what the BioDigital Certification represents, based on existing regulatory requirements and norms.",
		image: rulesImage,
	},
	{
		title: "2) Proof of Artifacts",
		description:
			"We map all the requirements with evidence and documents provided by the winery, and store this information on inmutable, decentralized storage (blockchain and IPFS), and where applicable we compare this data with public regulators.",
		image: evidencesImage,
	},
	{
		title: "3) Challenger Bounty with Kleros",
		description:
			"Using a challenge mechanism, wineries deposit funds into a bounty, which any challengers can try to claim by submitting evidence of fraud. The Kleros decentralized court decides if the certification is valid, and either returns the bounty to the winery and the digital certificate or awards the bounty to the challenger. ",
		image: justiceImage,
	},
];

const featureList: string[] = [
	"Dark/Light theme",
	"Reviews",
	"Features",
	"Pricing",
	"Contact form",
	"Our team",
	"Responsive design",
	"Newsletter",
	"Minimalist",
];

export const Features = () => {
	return (
		<section id="features" className="container py-24 sm:py-32 space-y-8">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				How does BioDigital Certification guarantee a wine's authenticity?{" "}
			</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map(({ title, description, image }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter>
							<img
								src={image}
								alt="About feature"
								className="w-[200px] lg:w-[300px] mx-auto"
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
