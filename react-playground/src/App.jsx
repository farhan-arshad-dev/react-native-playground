function App() {
  return (
    // should return single element like div OR empty html tag.
    <>
      <section>
        <div>React Playground</div>
        <p>Hi! this is Katherine Johnson.</p>
        <Profile />
        <Profile />
      </section>
    </>
  )
}

export function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

export default App
