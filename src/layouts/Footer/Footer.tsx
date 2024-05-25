import type { ComponentPropsWithoutRef } from "react";

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}
const Footer = ({ ...props }: Readonly<FooterProps>) => {
	return (
		<footer
			data-testid="Footer"
			{...props}
			className={
				"flex flex-col justify-center items-center bg-slate-100 bt-[1px solid border-slate-600] min-h-[var(--footer-min-height)] pi-[var(--container-padding-x)]"
			}>
			<p>
				<span className={"text-slate-600"}>made by </span>
				<a className="text-slate-500" href="https://mostafaabobakr.com" target="_blank" rel="noopener noreferrer">
					mostafaabobakr.com
				</a>
			</p>
			<section className={"flex items-center gap-2 text-slate-800"}>
				<a
					className="text-slate-500"
					href="https://www.linkedin.com/in/mostafaabobakr"
					target="_blank"
					rel="noopener noreferrer">
					Linkedin
				</a>
				<span> . </span>
				<a
					className="text-slate-500"
					href="https://github.com/mustafaabobakr"
					target="_blank"
					rel="noopener noreferrer">
					GitHub
				</a>
			</section>
		</footer>
	);
};

Footer.displayName = "Footer";
export default Footer;
