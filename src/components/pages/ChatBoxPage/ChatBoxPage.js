import { useEffect, useState, useRef } from "react";
import Talk from "talkjs";

function ChatBoxPage() {
  const chatboxEl = useRef();
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      // Create users here
      const currentUser = new Talk.User({
        id: "1",
        name: "Henry Mill",
        email: "henrymill@example.com",
        photoUrl: "henry.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const otherUser = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tUUwvR9g",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);

      // Mount the chatbox to the ref
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <div ref={chatboxEl} id="talkjs-container" style={{ width: '90%', margin: '30px', height: '500px' }}>
      <i>Loading chat...</i>
    </div> 
  )
}

export default ChatBoxPage;
