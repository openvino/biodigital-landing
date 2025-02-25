export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
				<div className="col-span-full xl:col-span-2">
					<a
						rel="noreferrer noopener"
						href="/"
						className="font-bold text-xl flex"
						target="_blank"
					>
						Biodigital Certification ™
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Partners</h3>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://inv.openvino.org/"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							INV
						</a>
					</div>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://kleros.io/es/"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Kleros
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://www.zksync.io/"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							zkSync
						</a>
					</div>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://www.zama.ai/"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							ZAMA
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">OPENVINO</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://biodigital.openvino.org/certify"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Certification Page
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://openvino.exchange/"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Exchange
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://openvino.atlassian.net/wiki/spaces/OPENVINO/pages/186712130/BioDigital+Certification.doc"
							className="opacity-60 hover:opacity-100"
							target="_blank"
						>
							Wiki
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Community</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://www.youtube.com/@OpenVino"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Youtube
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://t.me/open_vino"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Telegram
						</a>
					</div>
				</div>
			</section>

			<section className="container pb-14 text-center">
				<h3>
					&copy; 2025 made by{" "}
					<a
						rel="noreferrer noopener"
						target="_blank"
						href="https://openvino.org/"
						className="text-primary transition-all border-primary hover:border-b-2"
					>
						OPENVINO
					</a>
				</h3>
			</section>
		</footer>
	);
};
