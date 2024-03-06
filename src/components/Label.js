export default function Label(props) {
  return (
    <label
      className={`block mb-2 text-sm font-medium text-gray-900 ${props.className}`}
      {...props}
    >
      {props.children}
    </label>
  );
}
