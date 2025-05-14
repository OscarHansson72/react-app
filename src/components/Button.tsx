interface Props {
  color?: "primary" | "secondary" | "warning";
  onClick: () => void;
  text: string;
}

function Button({ onClick, color = "primary", text }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
