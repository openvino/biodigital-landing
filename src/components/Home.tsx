import { Button } from "./ui/button";

import openvinoLogo from "../assets/images/openvino-logo-color.png";
export const Home = () => {
	return (
		<section
			id="home"
			className="container grid md:grid-cols-1 place-items-center py-10 md:pt-24 gap-10"
		>
			<div className="text-left lg:text-start space-y-6">
				<main className="text-5xl md:text-4xl lg:text-6xl font-bold">
					<span>
						<img src={openvinoLogo} alt="Logo" className="h-12" />
						Biodigital Certification™
					</span>
				</main>

				<p className="text-xl text-muted-foreground md:w-10/12 mx-0 lg:mx-0">
					A revolutionary way to self-certify your wine with transparency and
					trust for free
				</p>

				<div className="space-y-4 md:space-y-0 md:space-x-4">
					<a href="https://biodigital.openvino.org/certify" target="_blank">
						<Button className="w-full md:w-1/3">Certify My Wine! </Button>
					</a>
				</div>
			</div>

			<div className="shadow"></div>
		</section>
	);
};
