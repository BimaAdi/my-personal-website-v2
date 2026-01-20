import { createFileRoute, Link } from "@tanstack/react-router";
import {
	CodeBlock,
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
						will have same syntax:
					</P>
				),
				id: (
					<P>
						Jika kalian membandingkan query dari database sql misal MySql dan
						PostgresSql mereka akan memiliki sintaks yang sama.
					</P>
				),
			})}
			<CodeBlock language="sql">
				{`SELECT * FROM users WHERE name = 'alice';`}
			</CodeBlock>
			{I8n(selectedLang, {
				en: (
					<P>
						And how they store data is also similar they both store data on
						disk.
					</P>
				),
				id: (
					<P>
						Dan cara mereka menyimpan data juga mirip keduanya menyimpan data di
						disk.
					</P>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<P>
						How about NoSQL database let's say mongodb and redis does query
						look's same? redis use key value syntax:
					</P>
				),
				id: (
					<P>
						Bagaimana dengan database NoSQL misal mongodb dan redis apakah
						querynya mirip? redis menggunakan sintaks key value:
					</P>
				),
			})}
			<CodeBlock language="redis">
				{`SET hello world
GET hello`}
			</CodeBlock>
			{I8n(selectedLang, {
				en: <P>mongodb use syntax kinda like javascript:</P>,
				id: <P>mongodb menggunakan sintaks yang mirip dengan javascript:</P>,
			})}
			<CodeBlock language="javascript">
				{`db.users.find({ "name": "alice" })`}
			</CodeBlock>
			{I8n(selectedLang, {
				en: (
					<P>
						Not only that the way mongodb store data is completely different
						with redis. mongodb store data on disk while redis on memory. So
						NoSql need broader category how to categorize even more? I will
						explain in next section.
					</P>
				),
				id: (
					<P>
						Tidak hanya itu cara mongodb menyimpan data juga berbeda dengan
						redis. mongodb menyimpan data di disk sedangkan redis di memory.
						Jadi NoSql perlu kategori yang lebih luas bagaimana cara
						mengkategorikan nya? selanjutnya akan saya jelaskan di bagian
						selanjutnya.
					</P>
				),
			})}
			<Section lvl={1}>
				{I8n(selectedLang, {
					en: "Better way to categorize database",
					id: "Cara yang lebih baik untuk mengkategorikan database",
				})}
			</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						I got inspired from this website called{" "}
						<Link
							className="underline"
							to={"https://db-engines.com/en/ranking" as string}
						>
							DB-Engines
						</Link>{" "}
						that categorize database based on data model like:
					</P>
				),
				id: (
					<P>
						Saya mendapatkan inspirasi dari website bernama{" "}
						<Link
							className="underline"
							to={"https://db-engines.com/en/ranking" as string}
						>
							DB-Engines
						</Link>{" "}
						yang mengkategorikan database berdasarkan model data seperti:
					</P>
				),
			})}
			<Section lvl={2}>1. Relational Database</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						Relational Database is database that implement sql standard. Example
						of relational database:
					</P>
				),
				id: (
					<P>
						Relational Database adalah database yang mengimplementasikan
						standard sql. Contoh relational database:
					</P>
				),
			})}
			<Ul>
				<Li depth={2}>MySql</Li>
				<Li depth={2}>PostgreSql</Li>
				<Li depth={2}>SQLite</Li>
				<Li depth={2}>Microsoft SQL Server</Li>
			</Ul>
			<Section lvl={2}>2. Key-Value Store</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						Key-Value Store is database that store data in key value format.
						Usually they store data primarily in memory (RAM). Example of
						key-value store database:
					</P>
				),
				id: (
					<P>
						Key-Value Store adalah database yang menyimpan data dalam format key
						value. Biasanya data disimpan pada memory (RAM). Contoh database
						key-value store:
					</P>
				),
			})}
			<Ul>
				<Li depth={2}>Redis</Li>
				<Li depth={2}>ValKey</Li>
				<Li depth={2}>Memcached</Li>
			</Ul>
			{I8n(selectedLang, {
				en: (
					<P>
						Advantages of storing data in memory is the access speed is very
						fast compared to storing on disk. That's why memory is used to store
						small and temporary data to speed up data access. But the drawback
						of memory is the size were small. Some key value store database also
						have TTL (time to live) feature which data will be deleted
						automatically after certain period.
					</P>
				),
				id: (
					<P>
						Kelebihan menyimpan data di memory adalah kecepatan akses data yang
						sangat cepat dibadingkan menyimpan di disk. Karena itulah kegunaan
						dari memory dikarenakan besar disk cenderung besar maka komputer
						menggunakan memory untuk menyimpan data yang kecil dan sementara
						untuk mempercepat akses data. Namun kekurangan dari memory adalah
						sizenya kecil. Beberapa key value store database juga memiliki fitur
						TTL (time to live) yaitu data akan dihapus secara otomatis setelah
						jangka waktu tertentu.
					</P>
				),
			})}
			<Section lvl={2}>3. Document Database</Section>
			{I8n(selectedLang, {
				en: (
					<P>
						Document Database is database that store data in document format
						(like json). The big difference from other database is it can store
						diffrent shape of data in same table/document/index. Example of
						document database:
					</P>
				),
				id: (
					<P>
						Document Database adalah database yang menyimpan data dalam format
						(biasanya json). Perbedaan besar dari database lain adalah dapat
						menyimpan bentuk data yang berbeda dalam tabel/dokumen/index yang
						sama. Contoh database document:
					</P>
				),
			})}
			<Ul>
				<Li depth={2}>MongoDB</Li>
				<Li depth={2}>CouchDB</Li>
				<Li depth={2}>Firebase Firestore</Li>
			</Ul>
			{I8n(selectedLang, {
				en: (
					<P>
						Imagine you have to store log from your aplication which is like
						this:
					</P>
				),
				id: (
					<P>
						Bayangkan anda harus menyimpan data hasil log aplikasi seperti ini:
					</P>
				),
			})}
			<Ul>
				<Li depth={1}>
					<CodeBlock language="json">
						{`{
  "trace_id": "b7f9e8c2-4a1d-4e2e-9c3a-2f5d8e7b6c1a",
  "level": "info",
  "message": "User login successful",
  "userId": 12345
}`}
					</CodeBlock>
				</Li>
				<Li depth={1}>
					<CodeBlock language="json">
						{`{
  "trace_id": "a3d2c1b4-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  "level": "error",
  "error": "Database connection failed",
  "userId": 12345
}`}
					</CodeBlock>
				</Li>
				<Li depth={1}>
					<CodeBlock language="json">
						{`{
  "trace_id": "f1e2d3c4-b5a6-7890-1234-56789abcdef0",
  "level": "info",
  "message": "payment successful",
  "paymentInfo": {
	"amount": 100,
	"currency": "USD"
  },
  "userId": 12345
}`}
					</CodeBlock>
				</Li>
			</Ul>
			{I8n(selectedLang, {
				en: (
					<P>
						Let's try to store using table like database like relational
						database
					</P>
				),
				id: (
					<P>Kita coba simpan menggunakan table seperti database relational</P>
				),
			})}
			<Table
				head={
					<>
						<TableHeader>trace_id</TableHeader>
						<TableHeader>level</TableHeader>
						<TableHeader>message</TableHeader>
						<TableHeader>error</TableHeader>
						<TableHeader>paymentInfo</TableHeader>
						<TableHeader>userId</TableHeader>
					</>
				}
				body={
					<>
						<TableRow>
							<TableData>b7f9e8c2-4a1d-4e2e-9c3a-2f5d8e7b6c1a</TableData>
							<TableData>info</TableData>
							<TableData>User login successful</TableData>
							<TableData>-</TableData>
							<TableData>-</TableData>
							<TableData>12345</TableData>
						</TableRow>
						<TableRow>
							<TableData>a3d2c1b4-5e6f-7a8b-9c0d-1e2f3a4b5c6d</TableData>
							<TableData>error</TableData>
							<TableData>-</TableData>
							<TableData>Database connection failed</TableData>
							<TableData>-</TableData>
							<TableData>12345</TableData>
						</TableRow>
						<TableRow>
							<TableData>f1e2d3c4-b5a6-7890-1234-56789abcdef0</TableData>
							<TableData>info</TableData>
							<TableData>payment successful</TableData>
							<TableData>-</TableData>
							<TableData>{`{"amount": 100, "currency": "USD"}`}</TableData>
							<TableData>12345</TableData>
						</TableRow>
					</>
				}
			/>
			{I8n(selectedLang, {
				en: (
					<P>
						We can see that some column is blank (-) because not all data has
						that column. Imagine if you insert new data that have column/key
						that doesn't exist in this current table, You will lose data from
						that key. You have to add new column to that table.
					</P>
				),
				id: (
					<P>
						Bisa kita lihat beberapa kolom harus dikosongkan (-) karena tida
						semua data memiliki kolom tersebut. Bayangkan jika ada data baru
						yang memiliki kolom/key yang tidak ada di table saat ini, Maka anda
						akan kehilangan data dari key tersebut. Anda harus menambahkan kolom
						baru ke table tersebut.
					</P>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<P>
						If we use document database we don't have that problem, you can
						store the data as it is. document database will add key
						automatically.
					</P>
				),
				id: (
					<P>
						Jika kita menggunakan document database kita tidak akan memiliki
						masalah tersebut, kita bisa menyimpan data apa adanya. database
						document akan menambahkan key secara otomatis.
					</P>
				),
			})}
			{I8n(selectedLang, {
				en: (
					<P>
						But having dynamic key (dynamic schema) also have some drawback.
						Imagine you use document database to store user data like this
					</P>
				),
				id: (
					<P>
						Namun key yang dinamis juga memiliki kekurangan. Bayangkan kita
						menggunakan document database untuk menyimpan data user seperti ini
					</P>
				),
			})}
			<CodeBlock language="json">
				{`{
  "name": "Alice",
  "age": 30,
}`}
			</CodeBlock>
			{I8n(selectedLang, {
				en: <P>Then you got typo name to username when insert new data</P>,
				id: (
					<P>
						Lalu anda salah mengetik name menjadi username ketika menambahkan
						data baru
					</P>
				),
			})}
			<CodeBlock language="json">
				{`{
  "username": "John",
  "age": 15,
}`}
			</CodeBlock>
			{I8n(selectedLang, {
				en: (
					<P>
						If you use relational database. The database will reject this input
						and prevent data malform. In Document Store the data will be
						accepeted . The moment you query for name the data will not be
						found. you must fix the code and all malform data.
					</P>
				),
				id: (
					<P>
						Jika anda menggunakan relational database. Database akan menolak
						input dan mencegah inconsistensi data. Jika menggunakan document
						database data akan tetap diterima dan ketika mencari data
						berdasarkan name data tidak akan ditemukan. Anda harus memperbaiki
						kode dan semua data yang salah tersebut.
					</P>
				),
			})}
		</Container>
	);
}
