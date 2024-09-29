export default function Loading() {
  return (
    <div className="absolute h-[100vh] w-full z-[99] inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loading"></div>
    </div>
  );
}
