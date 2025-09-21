import Intro from "./Intro.jsx";
import Profile from "./Profile.jsx";
import Bio from "./Bio.jsx";
import PackingList from "./Conditional.jsx";
import List, { Poem, ShowChemistList, ShowChemistListBullets } from "./RenderingLists.jsx";
import TeaSet, { TeaGatheringPure } from "./PureComponents.jsx";
import InteractiveEvents, { Counter, Form, FormFill, FormFillX, FormFillY, Gallery, Signup, TaskApp, ToolbarEvent } from "./Interactivity.jsx";

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

      <h1>Im-Pure Function</h1>
      <TeaSet />

      <h1>Pure Function & local mutation</h1>
      <TeaGatheringPure />

      <h1>Adding Interactivity</h1>
      <InteractiveEvents />

      <h1>State: a component’s memory</h1>
      <Gallery />
      <br />
      <Form />
      <br />
      <Counter />
      <br />
      <ToolbarEvent />
      <br />
      <Signup />
      <br />
      <FormFill />
      <br />
      <FormFillX />
      <br />
      <FormFillY />
      <br />
      <br />
      <TaskApp />
    </>
  )
}

export default App
