import Header from "../components/Header";

const HowToLink = () => (
  <>
    <Header title="How to link your DodgyCoin account" goBack />
    <div className="prose">
      <ol>
        <li>Go into a room with the DodgyCoin bot.</li>
        <li>
          Type{" "}
          <code>
            $linkaccount {"<"}yourgithub{">"}
          </code>
        </li>
        <li>Go back and sign in with your GitHub account</li>
      </ol>
      <p>To unlink your account, type <code>$unlinkaccount</code>.</p>
    </div>
  </>
);
export default HowToLink;
