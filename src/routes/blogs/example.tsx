import { createFileRoute } from "@tanstack/react-router";
import {
	CodeBlock,
	Container,
	Hero,
	Li,
	Ol,
	P,
	Section,
	Table,
	TableData,
	TableHeader,
	TableRow,
	Title,
	Ul,
} from "@/client/components/routes/blogs/common";

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
			<Table
				head={
					<>
						<TableHeader>Header 1</TableHeader>
						<TableHeader>Header 2</TableHeader>
					</>
				}
				body={
					<>
						<TableRow>
							<TableData>Data 1</TableData>
							<TableData>Data 2</TableData>
						</TableRow>
						<TableRow>
							<TableData>Data 3</TableData>
							<TableData>Data 4</TableData>
						</TableRow>
					</>
				}
			/>
			<P>Unordered List:</P>
			<Ul>
				<Li>First item</Li>
				<Li>Second item</Li>
				<Li>Third item</Li>
				<Ul>
					<Li depth={2}>Nested first item</Li>
					<Li depth={2}>Nested second item</Li>
					<Li depth={2}>Nested third item</Li>
				</Ul>
				<Li>Fourth item</Li>
			</Ul>
			<P>Ordered List:</P>
			<Ol>
				<Li>First ordered item</Li>
				<Li>Second ordered item</Li>
				<Ol>
					<Li depth={2}>Nested first ordered item</Li>
					<Li depth={2}>Nested second ordered item</Li>
					<Li depth={2}>Nested third ordered item</Li>
				</Ol>
				<Li>Third ordered item</Li>
			</Ol>
			<CodeBlock language="javascript">
				{`function greet(name) {
  return 'Hello, ' + name + '!';
}`}
			</CodeBlock>
			<CodeBlock language="python">
				{`def greet(name):
	return 'Hello, ' + name + '!'`}
			</CodeBlock>
		</Container>
	);
}
