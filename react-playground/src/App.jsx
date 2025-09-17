import { Intro } from "./Intro.jsx";
import { Profile } from "./Profile.jsx";
import { Bio } from "./Bio.jsx";

function App() {
  return (
    // should return single element like div OR empty html tag.
    <>
      <Intro />
      <Profile />
      <Bio />
    </>
  )
}

export default App
