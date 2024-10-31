import Sidebar from './Components/Sidebar.jsx'
import Main from './pages/Main.jsx'

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1"> {/* Margin to avoid overlap with the sidebar */}
        <div id="home" className="h-screen bg-red-200 flex items-center justify-center">
          <Main/>
        </div>
        <div id="synopsis" className="h-screen bg-blue-200 flex items-center justify-center">
          <h1 className="text-4xl">Synopsis Section</h1>
        </div>
        <div id="gallery" className="h-screen bg-green-200 flex items-center justify-center">
          <h1 className="text-4xl">Gallery Section</h1>
        </div>
        <div id="videos" className="h-screen bg-yellow-200 flex items-center justify-center">
          <h1 className="text-4xl">Videos Section</h1>
        </div>
        <div id="cast" className="h-screen bg-purple-200 flex items-center justify-center">
          <h1 className="text-4xl">Cast Section</h1>
        </div>
      </div>
    </div>
  );
}
