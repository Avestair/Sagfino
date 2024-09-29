export function LoadingbuttonWithBg() {
  return (
    <button className="bg-primary p-2 rounded-md text-sm w-[90px] grid justify-center">
      <div className="loading-button "></div>
    </button>
  );
}

export function LoadingbuttonWithBorder() {
  return (
    <button className="bg-white border-2 border-primary p-2 rounded-md text-sm w-[90px] grid justify-center">
      <div className="loading-button-withoutbg"></div>
    </button>
  );
}

export function Loadingbutton() {
  return (
    <button className="bg-white p-2 rounded-md text-sm w-[90px] grid justify-center">
      <div className="loading-button-withoutbg "></div>
    </button>
  );
}
