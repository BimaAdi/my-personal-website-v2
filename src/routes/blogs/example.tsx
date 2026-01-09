import { createFileRoute } from "@tanstack/react-router";
import {
	Container,
	Hero,
	P,
	Section,
	Title,
} from "@/components/routes/blogs/common";

export const Route = createFileRoute("/blogs/example")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Container>
			<Hero />
			<Title>Example Blog Post</Title>
			<P>This is an example blog post to demonstrate the blog layout.</P>
			<Section lvl={1}>Section 1</Section>
			<Section lvl={2}>Section 2</Section>
			<Section lvl={3}>Section 3</Section>
			<Section lvl={4}>Section 4</Section>
			<P>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				dolor fugiat commodi nesciunt saepe, repellat, mollitia libero modi
				sequi cum eum quod! Veritatis laborum aliquid maxime vel itaque
				recusandae, ratione repudiandae ab atque, harum doloribus reiciendis
				dolorum iure quae, laudantium rem unde dolor minima aut? Tenetur numquam
				delectus alias optio.
			</P>
		</Container>
	);
}
