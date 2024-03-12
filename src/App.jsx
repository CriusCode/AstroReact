import { useState } from "react";

import Authenticate from "./components/authenticate";
import Notes from "./components/notes";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const onAuthenticatedChangedHandler = newAuthValue => setAuthenticated(newAuthValue);

  if (authenticated) {
    return (
      <>
        <h1>Application Notes</h1>
        <notes />
      </>
    )
  } else {
    return (
      <>
        <h1>Application Notes</h1>
        <Authenticate onAuthenticatedChanged={onAuthenticatedChangedHandler} />
      </>
    )
  }
}
