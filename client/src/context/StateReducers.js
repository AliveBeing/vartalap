import { reducerCases } from "./constants";

export const intialState = {
  userInfo: undefined,
  newUser: false,
  contactsPage: false,
  currentChatUser: undefined,
<<<<<<< HEAD
  messages: [],
  socket: undefined,
  messagesSearch: false,
  userContacts: [],
  onlineUsers: [],
  filteredContacts: [],
=======
  messages : [],
  socket : undefined,
  messagesSearch:false,

  videoCall: undefined,
  voiceCall: undefined,
  incomingVoiceCall: undefined,
  incomingVideoCall: undefined,
>>>>>>> a340e29d0b04216899547dddf5025eb477679cec
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };
    case reducerCases.SET_ALL_CONTACTS_PAGE:
      return {
        ...state,
        contactsPage: !state.contactsPage,
      };
    case reducerCases.CHANGE_CURRENT_CHAT_USER:
      return {
        ...state,
        currentChatUser: action.user,
      };
    case reducerCases.SET_MESSAGES:
      return {
<<<<<<< HEAD
        ...state,
        messages: action.messages,
=======
          ...state,
          messages : action.messages,
>>>>>>> a340e29d0b04216899547dddf5025eb477679cec
      };
    case reducerCases.SET_SOCKET:
      return {
        ...state,
        socket: action.socket,
      };
    case reducerCases.ADD_MESSAGE:
<<<<<<< HEAD
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      };
    case reducerCases.SET_MESSAGE_SEARCH:
      return {
        ...state,
        messagesSearch: !state.messagesSearch,
      };
    case reducerCases.SET_USER_CONTACTS:
      return {
        ...state,
        userContacts: action.userContacts,
      };
    case reducerCases.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    case reducerCases.SET_CONTACT_SEARCH: {
      const filteredContacts = state.userContacts.filter((contact) =>
        contact.name.toLowerCase().includes(action.contactSearch.toLowerCase())
      );
      return {
        ...state,
        contactSearch:action.contactSearch,
        filteredContacts
      }
    }
=======
    return {
      ...state,
      messages: [...state.messages, action.newMessage],
    };
    case reducerCases.SET_MESSAGE_SEARCH:
      return{
        ...state,
        messagesSearch: !state.messagesSearch,
      };

    case reducerCases.SET_VIDEO_CALL:
      return{
        ...state,
        videoCall:action.videoCall,
      };
    case reducerCases.SET_VOICE_CALL:
      return{
        ...state,
        voiceCall:action.voiceCall,
      };
    case reducerCases.SET_INCOMING_VOICE_CALL:
      return{
        ...state,
        incomingVoiceCall:action.incomingVoiceCall,
      };
    case reducerCases.SET_INCOMING_VIDEO_CALL:
      return{
        ...state,
        incomingVideoCall:action.incomingVideoCall,
      };
    case reducerCases.END_CALL:
      return{
        ...state,
        voiceCall: undefined,
        videoCall: undefined,
        incomingVideoCall: undefined,
        incomingVoiceCall: undefined,
      };
          
>>>>>>> a340e29d0b04216899547dddf5025eb477679cec
    default:
      return state;
  }
};

export default reducer;
