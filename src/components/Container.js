export default function Container({ id, children }) {
  return (
    <div className="space-y-4">
      <div id={id} className="pb-16" />
      <br />
      {children}
    </div>
  );
}