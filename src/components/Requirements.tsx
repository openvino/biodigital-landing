import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { requirements } from "@/utils/data";

export default function Requirements() {
	const [selectedCert, setSelectedCert] =
		useState<keyof typeof requirements>("Organic");

	return (
		<section id="requirements" className="container text-center py-24 sm:py-32">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center mb-4">
				Proof of Artifacts
			</h2>

			<div className="flex justify-center mb-6">
				<Select
					onValueChange={(value) =>
						setSelectedCert(value as "Organic" | "Carbon Neutral" | "Vegan")
					}
				>
					<SelectTrigger className="w-48 border border-[#7A1E26] text-[#7A1E26] focus:ring-0">
						<SelectValue placeholder="Select Certification" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Organic">Organic</SelectItem>
						<SelectItem value="Carbon Neutral">Carbon Neutral</SelectItem>
						<SelectItem value="Vegan">Vegan</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Card className="w-full py-8 px-2shadow-lg rounded-2xl border border-gray-200">
				<CardContent>
					<div className="h-64 w-full overflow-auto border rounded-lg">
						<table className="min-w-full border-collapse">
							<thead>
								<tr className="bg-gray-100">
									<th className="border p-2 text-center">Requirement</th>
									<th className="border p-2 text-center">Details</th>
									<th className="border p-2 text-center">Evidence </th>
								</tr>
							</thead>
							<tbody>
								{requirements[selectedCert].map((req) => (
									<tr key={req.requirement} className="border-b">
										<td className="p-2 border-r">
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger className="underline cursor-pointer">
														{req?.url ? (
															<a href={req.url} target="_blank">
																{req.requirement}
															</a>
														) : (
															<span>{req.requirement}</span>
														)}
													</TooltipTrigger>
													<TooltipContent>{req.tooltip}</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</td>
										<td className="p-2">{req.details}</td>
										<td className="p-2 grid grid-cols-12 items-center gap-2">
											<span className="col-span-4 flex justify-self-end">
												{req.icon}
											</span>
											<span className="col-span-1 md:col-span-0 flex justify-self-end"></span>
											<span className="col-span-7 justify-self-center">
												{req.evidence}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
