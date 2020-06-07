export function reducer(state = initState, action) {
  switch (action.type) {
    case "SEND":
      const sentmails = [...state.sentmails, action.mail];
      return { ...state, sentmails };
    case "DELETE":
      return checkMailType(action.mailType, action.mails, state);
    case "SET_INVIEW":
      const inView = action.inView;
      return { ...state, inView };
    default:
      return state;
  }
}

const checkMailType = (mailType, mails, state) => {
  if (mailType === "sent") {
    const { trash, newMails: sentmails } = mails;
    return { ...state, trash, sentmails };
  } else if (mailType === "inbox") {
    const { trash, newMails: inbox } = mails;
    return { ...state, trash, inbox };
  } else if (mailType === "trash") {
    const { trash } = mails;
    return { ...state, trash };
  }
};

const initState = {
  sentmails: [],
  inbox: [],
  trash: [],
  inView: {}
};
