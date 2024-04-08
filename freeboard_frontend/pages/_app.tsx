import { AppProps } from 'next/app'
import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://backend-practice.codebootcamp.co.kr/graphql',
		cache: new InMemoryCache()
	})

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}
