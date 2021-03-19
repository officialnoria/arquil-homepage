import '../styles/globals.css';
import '../styles/header.css';
import '../styles/transformation.css'
import '../styles/serviceItem.css'
import '../styles/methodology.css'
import '../styles/courses.css'
import '../styles/courseItem.css'
import '../styles/freeVideos.css'
import '../styles/clients.css'
import '../styles/about.css'
import '../styles/footer.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Raleway, serif",
    mono: "Menlo, monospace",
  },
})

function Homepage({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <style jsx global>
        {`
        body {
          font-family: 'Raleway', sans-serif
        }
        `}
      </style>
    </ChakraProvider>
  );
}

export default Homepage;
