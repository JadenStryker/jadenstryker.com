import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { appTheme } from '~/themeing/mantineTheme';
import { NavigationProgress } from '@mantine/nprogress';
// import { HeaderFrame } from '~/components/frames/headerFrame';
import '@mantine/core/styles.css';
import dynamic from 'next/dynamic';

const HeaderFrame = dynamic(() => import('../components/frames/headerFrame'), {
  ssr: false
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider 
    defaultColorScheme="light"
    theme = {appTheme}
    > 
    <NavigationProgress />
      <HeaderFrame>
        <Component {...pageProps} />
      </HeaderFrame>
    </MantineProvider>

  )
}
