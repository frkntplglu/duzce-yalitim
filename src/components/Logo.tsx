export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-navy" : "text-paper";
  const sub = tone === "dark" ? "text-muted" : "text-paper/70";
  return (
    <span className="flex items-center gap-3">
      <span aria-hidden="true" className="flex h-9 w-2 flex-col gap-[3px]">
        <span className="flex-1 rounded-[1px] bg-yellow" />
        <span className={`flex-1 rounded-[1px] ${tone === "dark" ? "bg-navy" : "bg-paper"}`} />
        <span className="flex-1 rounded-[1px] bg-yellow" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-extrabold tracking-[-0.02em] ${main}`}>
          Düzce Yalıtım
        </span>
        <span className={`mt-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] ${sub}`}>
          ve Mantolama
        </span>
      </span>
    </span>
  );
}
