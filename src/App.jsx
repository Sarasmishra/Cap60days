import "./App.css";
import Counter1 from "./components/Counter1";
import ProfileUpdater from "./components/ProfileUpdater";
import ScoreKeeper from "./components/ScoreKeeper";
import ShowHideText from "./components/ShowHideText";
import TaskManager from "./components/TaskManager";
import TextInput1 from "./components/TextInput1";
import ToggleMessage1 from "./components/ToggleMessage1";
import UserInfo1 from "./components/UserInfo1";
import UsernameInput from "./components/UsernameInput";
import ItemList1 from "./components/ItemList1";

function App() {
  return (
    <>
      Uncomment to get particular component
      { <Counter1 /> }
      { <ScoreKeeper />}

      { <TextInput1 /> }
      { <UsernameInput /> }

      { <ToggleMessage1 /> }
      {<ShowHideText /> }
      
      { <UserInfo1 /> }
      { <ProfileUpdater /> }
 
      { <ItemList1 /> }
      { <TaskManager /> }




    </>
  );
}

export default App;
