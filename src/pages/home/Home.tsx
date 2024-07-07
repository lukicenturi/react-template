import { ReactElement } from 'react'

function Home(): ReactElement {
  return (
    <div className="flex flex-col justify-center">
      <img src="/logo.svg" alt="Hello World" />
      <div className="font-bold">Hello World</div>
    </div>
  )
}

export default Home
