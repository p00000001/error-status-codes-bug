/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
      <p>
        <a href="/throw-not-found">Throw 404 page</a><br/>
        <a href="/throw-redirect">Throw Redirect page</a><br />
        <a href="/throw-misc-error">Throw Misc Error page</a>
      </p>
  )
}
