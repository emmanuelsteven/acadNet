import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";


function App() {
  return (
  <div>
    <h1>My Todos</h1>
   < Todo  text ="learn React"/>
   < Todo  text = 'teach others'/>
   < Todo  text = 'explore the full course' />
   <Modal />
   <Backdrop />
  </div>
  );
}

export default App;
