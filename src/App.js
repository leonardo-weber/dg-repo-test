import { ThemeProvider } from '@emotion/react';
import Quiz from 'dog-trust-quiz'

function App() {
  return (
    <ThemeProvider theme={{ }}>
      <Quiz />
    </ThemeProvider>
  );
}

export default App;