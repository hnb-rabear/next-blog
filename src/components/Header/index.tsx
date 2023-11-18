import Link from "next/link";
import Logo from "./Logo";
import {
	DribbbleIcon,
	GithubIcon,
	LinkedinIcon,
	SunIcon,
	TwitterIcon
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Header = () => {
	return (
		<div className="w-full py-4 px-10 flex items-center justify-between">
			<Logo />
			<nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
				<Link href="/" className="mr-2">
					Home
				</Link>
				<Link href="/about" className="mx-2">
					About
				</Link>
				<Link href="/contact" className="mx-2">
					Contact
				</Link>
				<button type="button" title="Toggle theme">
					<SunIcon className="" />
				</button>
			</nav>
			<div className=" hidden sm:flex items-center">
				{siteMetadata.linkedin && (
					<a
						href={siteMetadata.linkedin}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Reach out to me via LinkedIn"
						target="_blank"
					>
						<LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
					</a>
				)}
				{siteMetadata.twitter && (
					<a
						href={siteMetadata.twitter}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Reach out to me via Twitter"
						target="_blank"
					>
						<TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
					</a>
				)}
				{siteMetadata.github && (
					<a
						href={siteMetadata.github}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Check my profile on Github"
						target="_blank"
					>
						<GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
					</a>
				)}
				{siteMetadata.dribbble && (
					<a
						href={siteMetadata.dribbble}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Check my profile on Dribbble"
						target="_blank"
					>
						<DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
					</a>
				)}
			</div>
		</div>
	);
};
export default Header;
