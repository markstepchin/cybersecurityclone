export const customEvent = ({ name, value }) => {
  console.log(name);
  const event = {};
  event.target = {};
  event.target.name = name;
  event.target.value = value;

  return event;
};
