export const customEvent = ({ name, value }) => {
  const event = {};
  event.target = {};
  event.target.name = name;
  event.target.value = value;

  return event;
};
