import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="w-80 space-y-6">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Convidados</h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Jessica White
              </span>
              <span className="block text-sm text-zinc-400">
                jessica.white44@yahoo.com
              </span>
            </div>
            <CircleDashed className="size-5 text-zin-400 shrink-8" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Dr. Rita Pacocha
              </span>
              <span className="block text-sm text-zinc-400">
                rita.pacocha@yahoo.com
              </span>
            </div>
            <CircleCheck className="size-5 text-line-300 shrink-8" />
          </div>
        </div>

        <Button variant="secondary" size="full">
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  );
}
