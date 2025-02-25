import { useState } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

import LogoIcon from "../assets/images/biodigitalLogoNoBackground.png";

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: "#home",
		label: "Home",
	},
	{
		href: "#about",
		label: "About",
	},
	{
		href: "#features",
		label: "How it works",
	},
	{
		href: "#requirements",
		label: "Requirements",
	},

	{
		href: "#kleros",
		label: "Kleros",
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
			<NavigationMenu className="mx-auto">
				<NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
					<NavigationMenuItem className="font-bold flex">
						<a
							rel="noreferrer noopener"
							href="/"
							className="ml-2 font-bold text-xl flex items-center"
						>
							<img src={LogoIcon} alt="Logo" className="h-14 w-auto mr-4" />{" "}
						</a>
					</NavigationMenuItem>

					{/* mobile */}
					<span className="flex md:hidden">
						<ModeToggle />

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className="px-2">
								<Menu
									className="flex md:hidden h-5 w-5"
									onClick={() => setIsOpen(true)}
								>
									<span className="sr-only">Menu Icon</span>
								</Menu>
							</SheetTrigger>

							<SheetContent side={"left"}>
								<SheetHeader>
									<SheetTitle className="font-bold text-xl">
										Biodigital Certification
									</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col justify-center items-center gap-2 mt-4">
									{routeList.map(({ href, label }: RouteProps) => (
										<a
											rel="noreferrer noopener"
											key={`${label}-${href}`} // Clave única aquí también
											href={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({ variant: "ghost" })}
										>
											{label}
										</a>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					</span>

					{/* desktop */}
					<nav className="hidden md:flex gap-2">
						{routeList.map((route: RouteProps) => (
							<a
								rel="noreferrer noopener"
								key={`${route.label}-${route.href}`}
								href={route.href}
								className={`text-[17px] ${buttonVariants({
									variant: "ghost",
								})}`}
							>
								{route.label}
							</a>
						))}
					</nav>

					<div className="hidden md:flex gap-2">
						<ModeToggle />
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
