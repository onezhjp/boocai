import React from 'react'

import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <>
    <Image src="/logo.png" width="28" height="28" alt=""></Image>
    <span style={{ marginLeft: '.4em', fontWeight: 600, fontSize: 26 }}>
      boocai
    </span>
  </>,
  logoLink: '/',
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="boocai" />
      <meta
        property="og:description"
        content="boocai's personal site, I write blogs and publish projects here." />
      <meta
        name="description"
        content="boocai's personal site, I write blogs and publish projects here."
      />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s'
    }
  },
  project: {
    link: 'https://github.com/onezhjp',
  },
  chat: {},
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  search: {
    component: <></>
  },
  navigation: false,
  editLink: {
    text: '',
    component: (props) => { return <></> },
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} {' © '}Powered by {' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
      </span>
    )
  }
}

export default config
