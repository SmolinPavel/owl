import Layout from "../components/MyLayout.js";
import { withRouter } from "next/router";
import Markdown from "react-markdown";

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
Hi I am Pavel.
You can check my github profile [github profile](https://github.com/SmolinPavel).

### Wanna see some owl?

Just click the owl link.
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
));
