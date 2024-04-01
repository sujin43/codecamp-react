// import '../styles/globals.css'
import Layout from '@/src/commons/layout'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app' // type만 import할 때

export default function App({ Component }: AppProps): JSX.Element {
  // graphQL setting
  const client = new ApolloClient({
    uri: 'http://backend-example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시 저장
  })

  return (
    // 컴포넌트에서 graphQL 셋팅을 쓸 수 있도록 전달
    <ApolloProvider client={client}>
      <Layout>
        <Component />
      </Layout>
    </ApolloProvider>
  )
}
