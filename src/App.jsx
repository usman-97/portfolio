import Header from "./components/layout/Header";
import LeftPanel from "./components/layout/LeftPanel";
import SideNavBar from "./components/layout/SideNavBar";

function App() {
  return (
    <div className="grid grid-cols-[3.5rem_16rem_1fr] grid-rows-[auto_1fr_22rem_1.5rem] min-h-screen overflow-hidden text-silver">
      <Header />
      <LeftPanel />
      <SideNavBar />
      <main className="p-5 bg-obsidian">Editor</main>
      <section className="p-5 bg-obsidian">Terminal</section>
      <footer className="col-start-1 col-end-4 bg-midnight">Footer</footer>
    </div>
  );
}

export default App;
