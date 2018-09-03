import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="h-card">
    <p>
      Hi, my name is <span className="p-name">Jose Colque</span> and I am a human on the Internet.
    </p>
    <p>
      You can find me on other websites below:
    </p>

    <ul>
      <li><a className="u-url" href="https://www.linkedin.com/in/jose-gabriel-colque-huere-879660168/" rel="me">LinkedIn</a></li>
    </ul>
    <Link to="/blog/">Blog</Link>
  </div>
)

export default IndexPage
