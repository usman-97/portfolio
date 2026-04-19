import { ContentProvider } from "./contexts/ContentContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ContentProvider>
      <AppRouter />
    </ContentProvider>
  );
}

export default App;
