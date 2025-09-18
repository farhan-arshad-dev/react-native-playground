import { Intro } from "./Intro.jsx";
import { Profile } from "./Profile.jsx";
import { Bio } from "./Bio.jsx";
import PackingList from "./Conditional.jsx";
import List, { Poem, ShowChemistList, ShowChemistListBullets } from "./RenderingLists.jsx";

function App() {
  return (
    // should return single element like div OR empty html tag.
    <>
      <Intro />
      <Profile
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageUrl: 'https://i.imgur.com/cAnAEB8.jpeg'
        }}
      />
      <Bio />

      <h1>Conditional Rendering</h1>
      <PackingList />

      <h1>Rendering Lists</h1>
      <List />
      <h1>Filtering arrays of items</h1>
      <ShowChemistListBullets />
      <ShowChemistList />
      <Poem />
    </>
  )
}

export default App
