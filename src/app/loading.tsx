export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      {" "}
      <div className="flex items-center gap-2">
        {" "}
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />{" "}
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />{" "}
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500" />{" "}
      </div>{" "}
    </div>
  );
}
