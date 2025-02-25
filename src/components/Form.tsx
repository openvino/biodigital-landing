import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { File, Database, ShieldCheck } from "lucide-react"; // Iconos
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const requirements = {
	Organic: [
		{
			requirement: "Soil Management",
			details: "Maintain soil organic matter and prevent erosion.",
		},
		{
			requirement: "Water Usage",
			details: "Use sustainable irrigation practices.",
		},
		{
			requirement: "Weed Control",
			details: "Mechanical removal, crop rotation, or mulching.",
		},
		{
			requirement: "Fertilizers",
			details: "Only organic fertilizers allowed.",
		},
		{
			requirement: "Soil Sample",
			details: "Provide the most recent soil sample analysis.",
		},
	],
};

export default function RequirementsWithActions() {
	const [selectedCert, setSelectedCert] = useState("Organic");

	return (
		<section id="requirements" className="container text-center py-24 sm:py-32">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center mb-4">
				What evidence do we need?{" "}
				{/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Great Features
				</span> */}
			</h2>
			<Card className="w-full py-8 shadow-lg rounded-2xl border border-gray-200">
				<CardContent>
					<ScrollArea className="h-64 border rounded-lg overflow-y-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="bg-gray-100">
									<th className="border p-2 text-left">Requirement</th>
									<th className="border p-2 text-left">Details</th>
									<th className="border p-2 text-left">Actions</th>
								</tr>
							</thead>
							<tbody>
								{requirements[selectedCert].map((req, index) => (
									<tr key={index} className="border-b">
										{/* Tooltip con información del requisito */}
										<td className="p-2 border-r">
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger className="underline cursor-pointer">
														{req.requirement}
													</TooltipTrigger>
													<TooltipContent className="max-w-xs">
														{req.details}
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</td>
										<td className="p-2">{req.details}</td>

										{/* Dropdown de acciones */}
										<td className="p-2 text-center">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="outline">Select</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem>
														<File className="w-4 h-4 mr-2 text-pink-500" />
														IPFS (Documents, Work Logs)
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Database className="w-4 h-4 mr-2 text-purple-500" />
														zkSync (Sensor Data, Images)
													</DropdownMenuItem>
													<DropdownMenuItem>
														<ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
														Regulator (Chemical Analytics)
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</ScrollArea>
				</CardContent>
			</Card>
		</section>
	);
}
