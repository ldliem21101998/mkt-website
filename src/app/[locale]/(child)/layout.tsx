export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[80px]">{children}</div>
  );
}