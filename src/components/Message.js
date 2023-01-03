function Message(props) {
  console.log(props);
  return <span className="message">{props.message}</span>;
}

export default Message;
