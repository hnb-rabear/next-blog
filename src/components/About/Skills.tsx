const SkillList = [
	"next.js",
	"tailwind css",
	"figma",
	"javaScript",
	"web design",
	"Gatsby.js",
	"strapi",
	"firebase",
	"generative AI",
	"wireframing",
	"SEO",
	"framer motion",
	"sanity"
];

function Skills() {
	return (
		<>
			<section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
				<span className="font-semibold text-4xl text-accent">
					I'm comfortable in...
				</span>
				<ul className="flex flex-wrap mt-4 justify-start">
					{SkillList.map((skill, index) => {
						return (
							<li
								key={index}
								className="font-semibold inline-block capitalize text-xl py-2 px-2 border-2 border-solid border-dark rounded mr-2 mb-2 hover:scale-105 transition-all ease duration-200 cursor-pointer"
							>
								{skill}
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
}
export default Skills;
