interface Props {
  text: string;
}

function Button({ text }: Props) {
  return (
    <>
      <div>{text}</div>
    </>
  );
}

export default Button;
