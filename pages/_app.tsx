import { ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, chain, WagmiConfig } from 'wagmi';
import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const { provider, webSocketProvider, chains } = configureChains(
  [chain.mainnet, chain.goerli, chain.polygon, chain.polygonMumbai],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'Cryptolancer dapp',
  chains,
});

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  // added connectors from rainbowkit
  connectors,
});

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </SessionProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default MyApp;
