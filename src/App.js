import { ThemeProvider } from '@emotion/react';
import { Quiz } from 'dog-trust-quiz'
import 'dog-trust-quiz/global.css'

function App() {
  return (
    <ThemeProvider theme={{ }}>
      <Quiz />
    </ThemeProvider>
  );
}

export default App;