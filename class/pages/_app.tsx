// import '../styles/globals.css'
import ApolloSetting from '@/src/commons/apollo'
import Layout from '@/src/commons/layout'
import { globalStyles } from '@/src/commons/styles/globalStyles'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app' // type만 import할 때

export default function App({ Component }: AppProps): JSX.Element {
  return (
    // 컴포넌트에서 graphQL 셋팅을 쓸 수 있도록 전달
    <div>
      <div>======app.js=======</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </div>
  )
}
