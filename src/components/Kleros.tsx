import klerosLogo from "../assets/kleros.svg";
export const Kleros = () => {
	return (
		<section id="kleros" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<div className="sm:w-full md:w-[1000px] aspect-w-16 aspect-h-9 overflow-hidden">
						<iframe
							className="w-full h-full"
							src="https://www.youtube.com/embed/wZZ2ipS-jZw?si=pMV7aUL5_drOyb7g"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
						></iframe>
					</div>
					<div className="flex flex-col justify-start">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold flex justify-normal">
								What is
								<img
									src={klerosLogo}
									alt="Logo"
									className="h-32 w-auto mr-4 translate-y-[-2.5rem]"
								/>
								?
							</h2>
							<p className="text-xl text-muted-foreground translate-y-[-4rem] ">
								Kleros is a decentralized dispute resolution protocol for use on
								smart contract platforms, which has been implemented on
								Ethereum. It acts as a decentralized third party capable of
								providing decisions on the correct result when applying a set of
								rules to questions ranging from simple to highly complex.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
