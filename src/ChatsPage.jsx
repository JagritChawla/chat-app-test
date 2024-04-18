import { MultiChatWindow,MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';
// import { PrettyChatWindow} from 'react-chat-engine-pretty'

export const ChatsPage = ({ user }) => {
    const projectId = import.meta.env.VITE_PROJECT_ID;

    // comment this chatProps if switching to react-chat-engine-pretty
    const chatProps = useMultiChatLogic(
        projectId,
        user.username,
        user.secret
        );
    
    return (
        <div style={{ height: '100vh' }}>
            {/* <PrettyChatWindow 
                projectId={projectId}
                username={user.username}
                secret={user.secret}
                style={{height: '100%'}}
            /> */}
            
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow  {...chatProps} style={{ height: '100vh' }}/>
        </div>
    )
}

export default ChatsPage

