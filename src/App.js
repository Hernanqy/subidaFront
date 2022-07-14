import { Routes, Route } from "react-router-dom";
import { HomePage, Formulario, PostForm } from "./pages";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostForm />} />
            <Route path="/:id" element={<PostForm />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;