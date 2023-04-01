import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video likes={111}
        messages={222}
        shares={333} 
        name="Matheus Coelho" 
        description="Gato goleiro do prof. @PauloSantos" 
        music="epic music - epic artist"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      />
        <Video 
        likes={444} 
        messages={555} 
        shares={666}name="Matheus Gomes" 
        description="Gato no sofá" 
        music="Áudio original"
        url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
      />
        <Video 
        likes={777} 
        messages={888} 
        shares={999}name="Matheus" 
        description="Sem video ainda :'(" 
        music="another music - other artist"
        url=""
      />
      </div>
    </div>
  );
}

export default App;
