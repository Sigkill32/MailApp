export const SEND = "SEND";
export const DELETE = "DELETE";
export const VIEW = "VIEW";

export function sendMail(mail) {
  return { type: SEND, mail };
}

export function deleteMail(mail) {
  return { type: DELETE, mail };
}

export function viewMail(mail) {
  return { type: VIEW, mail };
}
