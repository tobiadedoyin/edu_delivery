import Socials from "../component/Icon";
import SimpleSearchBar from "../component/SearchBar";
import logo from "../assets/b_logo.png";
import "../component/dash.css";

export default function Dashboard() {
  return (
    <div>
      <header>
        <SimpleSearchBar />
        <p>
          <a href="https://bitnine.net/contact/">CONTACT</a>
        </p>
        <Socials />
      </header>

      {/* section 2 */}
      <div className="level">
        <img src={logo} alt="company logo" />
        <select>
          <option value="">Select Language</option>
          <option value="English"> English</option>
          <option value="korean">Korean</option>
        </select>

        <div className="grouplink">
          <a
            href="https://bitnine.net/agensgraph/"
            style={{ color: "rgb(221, 221, 17)" }}
          >
            PRODUCTS
          </a>
          <a href="https://bitnine.net/graph-database-use-case/">USE CASES</a>
          <a href="https://bitnine.net/services/">SERVICES</a>
          <a href="https://bitnine.net/documentation/">RESOURCES</a>
          <a href="https://bitnine.net/blog/">BLOG</a>
          <a href="https://bitnine.net/company/">COMPANY</a>
          <a href="https://bitnine.net/ir-announcement/">IR</a>
          <a
            href="https://bitnine.net/agensgraph-downloads/"
            className="button"
            style={{ color: "#fff" }}
          >
            TRY ME
          </a>
        </div>
      </div>

      {/* section 3 */}
      <div className="wording">
        <div>
          <h1>
            <span style={{ color: "#1f5dd8" }}>Agens</span>
            <span style={{ color: "rgb(221, 221, 17)" }}>SQL</span>
          </h1>
          <h2>An integration of Bitnine's DB technology and PG expertise</h2>
          <p>
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise and knowledge accumulated through database
            research and development.
          </p>
          <p>
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures the efficiency and scalability of data
            management.
          </p>
          <p>
            Get AgensSQL now for stable operation and management services at a
            reduced maintenance cost.
          </p>
        </div>

        <div className="con">
          <a href="https://bitnine.net/ko/contact/" className="button">
            CONTACT
          </a>
          <a
            href="https://bitnine.net/agenssql_brochure_ko/"
            className="button"
          >
            BROCHURE{" "}
          </a>
          <a
            href="https://blog.naver.com/bitnineglobal/222785715055"
            className="button"
          >
            BLOG
          </a>
        </div>
      </div>
    </div>
  );
}
