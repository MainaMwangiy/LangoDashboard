import { lusitana } from '@/app/ui/fonts';

export default function LangoLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Lango</p>
    </div>
  );
}
