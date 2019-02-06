import Layout from "../components/MyLayout.js";

import "./owl.css";

export default () => (
  <Layout>
    <h1>The Owl is watching you!</h1>
    <div className="box">
      <div className="body">
        <div className="head" />

        <div className={["ear", "left"].join(" ")}>
          <div className="ear-hole" />
        </div>

        <div className={["ear", "right"].join(" ")}>
          <div className="ear-hole" />
        </div>

        <div className={["eyelid", "left"].join(" ")} />
        <div className="eye-left">
          <div className="pupil">
            <div className="dot" />
          </div>
        </div>

        <div className={["eyelid", "right"].join(" ")} />
        <div className="eye-right">
          <div className="pupil">
            <div className="dot" />
          </div>
        </div>

        <div className="nose" />

        <div className="body-copy" />
        <div className="wing-left" />
        <div className="wing-right" />
        <div className="body-inner" />

        <div className={["leg", "left"].join(" ")} />
        <div className={["leg", "left-1"].join(" ")} />
        <div className={["leg", "left-2"].join(" ")} />
        <div className={["leg", "right"].join(" ")} />
        <div className={["leg", "right-1"].join(" ")} />
        <div className={["leg", "right-2"].join(" ")} />

        <div id="heart" />
      </div>
    </div>
  </Layout>
);
