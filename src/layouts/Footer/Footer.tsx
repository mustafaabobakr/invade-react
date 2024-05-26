import type { ComponentPropsWithoutRef } from "react";

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}
const Footer = ({ ...props }: Readonly<FooterProps>) => {
	return (
		<footer
			data-testid="Footer"
			{...props}
			className={
				"flex flex-col gap-2 justify-center items-center bg-slate-100 bt-[1px solid border-slate-600] min-h-[var(--footer-min-height)] pi-[var(--container-padding-x)]"
			}>
			<p>
				<span className={"text-slate-600"}>made by </span>
				<a className="text-slate-500" href="https://mostafaabobakr.com" target="_blank" rel="noopener noreferrer">
					mostafaabobakr.com
				</a>
			</p>
			<section className={"flex items-center gap-4 text-slate-800"}>
				<a
					className={"fill-slate-500 hover:fill-slate-900 transition-all ease-in-out"}
					href="https://www.linkedin.com/in/mostafaabobakr"
					target="_blank"
					rel="noopener noreferrer">
					<svg
						fill="none"
						aria-label="https://www.linkedin.com/company/node-js"
						viewBox="0 0 20 20"
						width={20}
						height={20}>
						<rect
							width={20}
							height={20}
							className={"fill-slate-500 hover:fill-slate-900 transition-all ease-in-out"}
							rx={10}
						/>
						<path
							fill="#fff"
							d="M7.585 5.494c0 .668-.579 1.21-1.293 1.21C5.58 6.703 5 6.161 5 5.493c0-.667.579-1.208 1.292-1.208.714 0 1.293.54 1.293 1.208ZM5.177 7.592h2.209v6.694h-2.21V7.592Zm5.766 0h-2.21v6.694h2.21V10.86c0-.791.27-1.586 1.347-1.586 1.218 0 1.21 1.035 1.205 1.837-.008 1.048.01 2.118.01 3.174h2.21v-3.533c-.02-2.256-.607-3.296-2.541-3.296-1.149 0-1.86.522-2.231.993v-.858Z"
						/>
					</svg>
				</a>
				<a
					className={"fill-slate-500 hover:fill-slate-900 transition-all ease-in-out"}
					href="https://github.com/mustafaabobakr"
					target="_blank"
					rel="noopener noreferrer">
					<svg viewBox="0 0 16 16" width={20} height={20}>
						<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
					</svg>
				</a>
			</section>
		</footer>
	);
};

Footer.displayName = "Footer";
export default Footer;
