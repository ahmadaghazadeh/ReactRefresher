export default function P({ children, ...props }) {
  return (
    <p {...props} className="text-stone-600 mb-4">
      {children}
    </p>
  );
}
