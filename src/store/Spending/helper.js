import { formatDate } from "../../utils/date";

export const formatSpendingPayloadBeforeAdd = (payload) => {
  const newDateFormat = formatDate(payload.created);
  const newPayload = { ...payload, created: newDateFormat };

  return newPayload;
};
