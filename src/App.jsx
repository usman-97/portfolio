import { ContentProvider } from "./contexts/ContentContext";
import { SystemProvider } from "./contexts/SystemContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <SystemProvider>
      <ContentProvider>
        <AppRouter />
      </ContentProvider>
    </SystemProvider>
  );
}

export default App;
