// Convert some HTML to JSX challenges
// export default function Bio() {
//   return (
//     <div class="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p class="summary">
//       You can find my thoughts here.
//       <br><br>
//       <b>And <i>pictures</b></i> of scientists!
//     </p>
//   );
// }

export default function Bio() {
    return (
        <>
            <div className="intro">
                <h1>Welcome to my website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br /><br />
                <b>And <i>pictures</i></b> of scientists!
            </p>
        </>
    );
}