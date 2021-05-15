import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
           height="100vh"
           projectID = "41c02377-56b0-4b93-b5f4-c13869778ff0"
           userName = "Daniel"
           userSecret = "123123"
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
           />
    )
}

export default App;