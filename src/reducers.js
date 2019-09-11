export function reducer(state = initState, action) {
  switch (action.type) {
    case "SEND":
      const sentmails = [...state.sentmails, action.mail];
      return { ...state, sentmails };
    case "DELETE":
      if (action.mailType === "sent") {
        const { trash, newMails: sentmails } = action.mails;
        return { ...state, trash, sentmails };
      } else if (action.mailType === "inbox") {
        const { trash, newMails: inbox } = action.mails;
        return { ...state, trash, inbox };
      } else if (action.mailType === "trash") {
        const { trash } = action.mails;
        return { ...state, trash };
      }
      break;
    case "SET_INVIEW":
      const inView = action.inView;
      return { ...state, inView };
    default:
      return state;
  }
}

const initState = {
  sentmails: [],
  inbox: [],
  trash: [],
  inView: {}
};
