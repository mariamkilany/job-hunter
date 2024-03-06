export default function Button(props) {
  return (
    <button
      {...props}
      className={`text-white bg-primary hover:bg-primary-500 p-3 hover:shadow-xl hover:translate-y-0.5 transition rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
}
