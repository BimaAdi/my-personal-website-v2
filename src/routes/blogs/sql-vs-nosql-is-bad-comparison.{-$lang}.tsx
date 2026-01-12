import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Container,
	Hero,
	Li,
	P,
	Section,
	Table,
	TableData,
	TableHeader,
	TableRow,
	Title,
	Ul,
} from "@/client/components/routes/blogs/common";
import blogPicture from "@/client/components/routes/blogs/sql-vs-nosql-is-bad-comparison/sql-vs-nosql-is-bad-comparison.png";
import { I8n } from "@/client/components/shared/I8n";
import useBlogsI8n from "@/client/hooks/useBlogsI8n";

export const Route = createFileRoute(
	"/blogs/sql-vs-nosql-is-bad-comparison/{-$lang}",
)({
	component: RouteComponent,
});

function RouteComponent() {
	const { lang } = Route.useParams();

	const { selectedLang } = useBlogsI8n(lang);

	return (
		<Container>
			<Hero imageLink={blogPicture} />
			<Title>
				{I8n(selectedLang, {
					en: "Sql vs NoSql is bad comparison",
					id: "Sql vs NoSql komparasi yang buruk",
				})}
			</Title>
			{I8n(selectedLang, {
				en: (
					<P>
						To decide which database to use, usually we start by grouping all
						database option. If you type on search engine or your favorite AI
						llm "how to choose the database?" they mostly will group it by "Sql
						vs NoSql". My Hot takes Sql vs NoSql is a bad comparison and I will
						explain to you guys why.
					</P>
				),
				id: (
					<P>
						Untuk menentukan database teknologi yang akan digunakan, biasanya
						kita melakukan pengelompokan terlebih dahulu. Kalau kalian coba
						searching di google atau pake ai llm favorite kalian "Bagaimana cara
						memilih database" Kemungkinan besar akan di group menjadi dua Sql
						atau NoSql. Pendapat saya Sql atau NoSql adalah komparasi yang buruk
						dan saya akan menjelaskanya di blog ini.
					</P>
				),
			})}
			<Section lvl={1}>
				{I8n(selectedLang, {
					en: "What is Sql vs NoSql?",
					id: "Apa itu Sql vs NoSql?",
				})}
			</Section>
			<P>
				{I8n(selectedLang, {
					en: (
						<>
							Sql (structured query language) it's refer to database that
							implement sql standard (
							<Link
								className="underline"
								to={"https://en.wikipedia.org/wiki/SQL" as string}
							>
								Wikipedia SQL
							</Link>
							) example database that categorize as sql mysql, postgresql,
							sqlite, microsoft sql etc. NoSql (is standfor not only sql) are
							database that don't implement sql standard for example redis,
							mongodb, dynamodb, etc.
						</>
					),
					id: (
						<>
							Sql (structured query language) adalah database yang
							mengimplementasikan standard sql (
							<Link
								className="underline"
								to={"https://en.wikipedia.org/wiki/SQL" as string}
							>
								Wikipedia SQL
							</Link>
							) contoh database sql mysql, postgresql, sqlite, microsoft sql
							dll. NoSql kepanjangan dari not only sql adalah database yang
							tidak implementasi sql. contohnya redis, mongodb, dynamodb, dll.
						</>
					),
				})}
			</P>
			{I8n(selectedLang, {
				en: <P>this the example of comparison sql vs nosql:</P>,
				id: <P>ini adalah contoh perbandingan sql vs nosql:</P>,
			})}
			{I8n(selectedLang, {
				en: (
					<Table
						head={
							<>
								<TableHeader>Aspect</TableHeader>
								<TableHeader>Sql</TableHeader>
								<TableHeader>NoSql</TableHeader>
							</>
						}
						body={
							<>
								<TableRow>
									<TableData>
										<span className="font-bold">Data Structure</span>
									</TableData>
									<TableData>Tables with fixed rows and columns</TableData>
									<TableData>
										Documents, Key-Value, Graphs, Wide-column
									</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Schema</span>
									</TableData>
									<TableData>Rigid, predefined (strict)</TableData>
									<TableData>Dynamic, flexible (schema-less)</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Scalability</span>
									</TableData>
									<TableData>Vertical (scale up, bigger server)</TableData>
									<TableData>Horizontal (scale out, more servers)</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Data Integrity</span>
									</TableData>
									<TableData>High (ACID compliant)</TableData>
									<TableData>
										Flexible (BASE: Basically Available, Soft state, Eventual
										consistency)
									</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Querying</span>
									</TableData>
									<TableData>Structured Query Language (SQL)</TableData>
									<TableData>Varies by database (e.g., JSON, API)</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Best For</span>
									</TableData>
									<TableData>Structured data, complex joins</TableData>
									<TableData>
										Unstructured or semi-structured data, rapid development,
										scalability
									</TableData>
								</TableRow>
							</>
						}
					/>
				),
				id: (
					<Table
						head={
							<>
								<TableHeader>Aspek</TableHeader>
								<TableHeader>Sql</TableHeader>
								<TableHeader>NoSql</TableHeader>
							</>
						}
						body={
							<>
								<TableRow>
									<TableData>
										<span className="font-bold">Struktur Data</span>
									</TableData>
									<TableData>Tabel dengan baris dan kolom tetap</TableData>
									<TableData>Dokumen, Key-Value, Graf, Wide-column</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Skema</span>
									</TableData>
									<TableData>Kaku, sudah ditentukan (ketat)</TableData>
									<TableData>Dinamis, fleksibel (tanpa skema)</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Skalabilitas</span>
									</TableData>
									<TableData>
										Vertikal (meningkatkan kapasitas server)
									</TableData>
									<TableData>Horizontal (menambah jumlah server)</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Integritas Data</span>
									</TableData>
									<TableData>Tinggi (memenuhi ACID)</TableData>
									<TableData>
										Fleksibel (BASE: Basically Available, Soft state, Eventual
										consistency)
									</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Querying</span>
									</TableData>
									<TableData>Structured Query Language (SQL)</TableData>
									<TableData>
										Bervariasi sesuai database (misal: JSON, API)
									</TableData>
								</TableRow>
								<TableRow>
									<TableData>
										<span className="font-bold">Paling Cocok Untuk</span>
									</TableData>
									<TableData>Data terstruktur, join kompleks</TableData>
									<TableData>
										Data tidak terstruktur atau semi-terstruktur, pengembangan
										cepat, skalabilitas
									</TableData>
								</TableRow>
							</>
						}
					/>
				),
			})}
			<Section lvl={1}>
				{I8n(selectedLang, {
					en: "Problem with Sql vs NoSql?",
					id: "Masalah dengan komparasi Sql vs NoSql?",
				})}
			</Section>
			<Section lvl={2}>
				{I8n(selectedLang, {
					en: "1. Misinterpretation of NoSql",
					id: "1. Salah pengertian tentang NoSql",
				})}
			</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						Some people misinterpret NoSql -&gt; Not Sql. This sometimes cause
						bias comparison. Just add no on every aspect.
					</P>
				),
				id: (
					<P>
						Beberapa orang salah mengartikan NoSql dengan "not sql" (bukan sql).
						Ini menyebabkan komparasi menjadi bias. Cukup tambahkan kata "no"
						pada setiap aspek.
					</P>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<Table
						head={
							<>
								<TableHeader>Aspect</TableHeader>
								<TableHeader>Sql</TableHeader>
								<TableHeader>NoSql</TableHeader>
							</>
						}
						body={
							<>
								<TableRow>
									<TableData>Speed</TableData>
									<TableData>Slow</TableData>
									<TableData>Fast</TableData>
								</TableRow>
								<TableRow>
									<TableData>Scalability</TableData>
									<TableData>Not Scale</TableData>
									<TableData>Scale</TableData>
								</TableRow>
								<TableRow>
									<TableData>Num Data</TableData>
									<TableData>Small</TableData>
									<TableData>Big</TableData>
								</TableRow>
							</>
						}
					/>
				),
				id: (
					<Table
						head={
							<>
								<TableHeader>Aspek</TableHeader>
								<TableHeader>Sql</TableHeader>
								<TableHeader>NoSql</TableHeader>
							</>
						}
						body={
							<>
								<TableRow>
									<TableData>Kecepatan</TableData>
									<TableData>Lambat</TableData>
									<TableData>Cepat</TableData>
								</TableRow>
								<TableRow>
									<TableData>Skalabilitas</TableData>
									<TableData>Tidak Skalabel</TableData>
									<TableData>Skalabel</TableData>
								</TableRow>
								<TableRow>
									<TableData>Jumlah Data</TableData>
									<TableData>Kecil</TableData>
									<TableData>Besar</TableData>
								</TableRow>
							</>
						}
					/>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<P>
						of cource comparison above it's <b>non sense</b>.
					</P>
				),
				id: (
					<P>
						tentu saja komparasi diatas <b>tidak masuk akal</b>.
					</P>
				),
			})}
			<Section lvl={2}>
				{I8n(selectedLang, {
					en: "2. NoSql is better than Sql",
					id: "2. NoSql lebih baik dari Sql",
				})}
			</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						The cause of using comparison above we conclude that NoSql is better
						than Sql. Using the comparison above it's like looking for IT
						project employee but we only categorize the job type into 2 Backend
						Developer and Non Backend Developer then make the comparison as
						follow:
					</P>
				),
				id: (
					<P>
						Akibat salah pemahaman diatas muncul kesimpulan bahwa NoSql lebih
						baik dari Sql. Menggunakan pemahaman diatas sama saja kita mencari
						karyawan untuk project IT tetapi kita hanya menggolongkan tipe
						pekerjaan menjadi 2 Backend Developer dan Non Backend Developer lalu
						membuat komparasi sebagai berikut:
					</P>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<Table
						head={
							<>
								<TableHeader>Aspect</TableHeader>
								<TableHeader>Backend Developer</TableHeader>
								<TableHeader>Non Backend Developer</TableHeader>
							</>
						}
						body={
							<>
								<TableRow>
									<TableData>UI Design</TableData>
									<TableData>No</TableData>
									<TableData>Yes</TableData>
								</TableRow>
								<TableRow>
									<TableData>Implement UI Design</TableData>
									<TableData>No</TableData>
									<TableData>Yes</TableData>
								</TableRow>
								<TableRow>
									<TableData>Project Management</TableData>
									<TableData>No</TableData>
									<TableData>Yes</TableData>
								</TableRow>
								<TableRow>
									<TableData>Deployment</TableData>
									<TableData>No</TableData>
									<TableData>Yes</TableData>
								</TableRow>
							</>
						}
					/>
				),
				id: (
					<Table
						head={
							<>
								<TableHeader>Aspek</TableHeader>
								<TableHeader>Backend Developer</TableHeader>
								<TableHeader>Non Backend Developer</TableHeader>
							</>
						}
						body={
							<>
								<TableRow>
									<TableData>Design UI</TableData>
									<TableData>Tidak</TableData>
									<TableData>Ya</TableData>
								</TableRow>
								<TableRow>
									<TableData>Implementasi UI</TableData>
									<TableData>Tidak</TableData>
									<TableData>Ya</TableData>
								</TableRow>
								<TableRow>
									<TableData>Manajemen Project</TableData>
									<TableData>Tidak</TableData>
									<TableData>Ya</TableData>
								</TableRow>
								<TableRow>
									<TableData>Deployment</TableData>
									<TableData>Tidak</TableData>
									<TableData>Ya</TableData>
								</TableRow>
							</>
						}
					/>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<P>
						Based on that comparison we must not recrut any backend developer
						because that role is bad. You will found that the app will not work.
						And you also realize that not all non backend developer can do
						design, not all non backend developer can do project management etc.
					</P>
				),
				id: (
					<P>
						Berdasarkan table diatas bisa ditarik kesimpulan, Janganlah merekrut
						backend developer karena tidak bisa apa-apa. Lalu kalian baru
						menyadari aplikasi tidak bisa berjalan. Dan kalian juga menyadari
						tidak semua non backend developer bisa design, tidak semua non
						backend developer bisa manajemen project dll
					</P>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<P>
						So what's the solution? Just make broader role by spliting non
						backend developer
					</P>
				),
				id: <P>Jadi apa solusinya? Cukup bagi role non developer</P>,
			})}
			{I8n(selectedLang, {
				en: (
					<Ul>
						<Li>UI Design -&gt; UI/UX Designer</Li>
						<Li>Implemet UI Design -&gt; Frontend Developer</Li>
						<Li>Project Management -&gt; Project Manager</Li>
						<Li>Deployment -&gt; DevOps Engineer</Li>
					</Ul>
				),
				id: (
					<Ul>
						<Li>Design UI -&gt; UI/UX Designer</Li>
						<Li>Implementasi UI -&gt; Frontend Developer</Li>
						<Li>Manajemen Project -&gt; Project Manager</Li>
						<Li>Deployment -&gt; DevOps Engineer</Li>
					</Ul>
				),
			})}
			<Section lvl={2}>
				{I8n(selectedLang, {
					en: "3. NoSql have broader category",
					id: "3. NoSql memiliki kategori yang lebih luas",
				})}
			</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						If you compare query of sql database like Mysql and PostgresSql they
						will have same syntax SELECT * FROM bla bla bla. How about NoSQL
						database let's say mongodb and redis does query look's similar? it's
						completely different. mongodb use syntax kinda like javascript
						db.users.find({"{"}"name":"alice"{"}"}). while redis use key value
						syntax `Keys alice`. Not only that the way mongodb store data is
						completely different with redis. mongodb store data on disk while
						redis on memory. So NoSql need broader category how to categorize
						even more? I will explain in next section.
					</P>
				),
				id: (
					<P>
						Jika kalian membandingkan query dari database sql misal MySql dan
						PostgresSql mereka akan memiliki sintaks yang mirip SELECT * FROM
						bla bla bla. Bagaimana dengan database NoSQL misal mongodb dan redis
						apakah querynya mirip? tidak ada yang sama. mongodb menggunakan
						sintaks yang mirip dengan javascript db.users.find({"{"}
						"name":"alice"{"}"}). sedangkan redis menggunakan sintaks key value
						`Keys alice`. Tidak hanya itu cara mongodb menyimpan data juga
						berbeda dengan redis. mongodb menyimpan data di disk sedangkan redis
						di memory. Jadi NoSql perlu kategori yang lebih luas bagaimana cara
						mengkategorikan nya? saya akan jelaskan di bagian selanjutnya.
					</P>
				),
			})}
		</Container>
	);
}
