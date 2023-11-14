import { allBlogs } from "contentlayer/generated";
import HomCoverSection from "../components/Home/HomCoverSection";

export default function Home() {
	console.log(allBlogs);

	return (
		<main className="flex flex-col items-center justify-center">
			<HomCoverSection />
		</main>
	);
}
