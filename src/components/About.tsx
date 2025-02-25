import { Seals } from "./Seals";

export const About = () => {
	return (
		<section id="about" className="container py-24 sm:py-32 md:grid-cols-2">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<div className="sm:w-full md:w-[1000px] aspect-w-16 aspect-h-9 overflow-hidden">
						{" "}
						<iframe
							className="w-full h-full"
							src="https://www.youtube.com/embed/D3DRQdXu_z4?si=NY2ruFGidpqhOI3H"
							title="YouTube video player2"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
						></iframe>
					</div>
					<div className="flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								What is
								<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
									{" "}
									BioDigital Certification
								</span>
								?
							</h2>
							<p className="text-xl text-muted-foreground mt-4">
								With OpenVino - BioDigital Certification, wineries can
								self-attest the authenticity of their wines (organic, vegan,
								provenance, carbon-neutral, and more!) providing transparency
								and trust to wine consumers.
							</p>
						</div>

						<Seals />
					</div>
				</div>
			</div>
		</section>
	);
};
