import { NextPage } from "next"
import Head from "next/head"

type LayoutProps = {
  title: string
  description: string
  keywords: string[]
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  title: "Events App",
  description: "Events App find the hottest local events",
  keywords: ["events", "local"],
}

function Layout({ title, description, keywords, children }: LayoutProps) {
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout