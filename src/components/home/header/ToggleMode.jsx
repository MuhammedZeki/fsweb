const ToggleMode = () => {
  return (
    <section className="border border-red d-flex items-center gap-2">
      <div className="d-flex gap-1 items-center ">
        <div className="w-14 h-6 bg-[#4731D3] rounded-2xl relative cursor-pointer">
          <div className="absolute rounded-full w-4 h-4 bg-[#FFE86E] top-1 right-2"></div>
        </div>
        <span className="font-inter text-[#777777] text-sm font-bold tracking-[10%]">
          DARK MODE
        </span>
      </div>
      <div className="border border-[#777777] h-5"></div>
      <div>
        <span className="font-inter text-[#4731D3] text-sm font-bold tracking-[10%]">
          TÜRKÇE
        </span>
        <span className="font-inter text-[#777777] text-sm font-bold tracking-[10%]">
          'YE GEÇ
        </span>
      </div>
    </section>
  );
};

export default ToggleMode;
