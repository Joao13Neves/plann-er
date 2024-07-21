import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://airbnb.com.br/rooms/131089273981789471289043791
            </a>
          </div>
          <Link2 className="size-5 text-zin-400 shrink-8" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Regras da cas
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://notion.com.br/rooms/131089273981789471289043791
            </a>
          </div>
          <Link2 className="size-5 text-zin-400 shrink-8" />
        </div>
      </div>

      <Button variant="secondary" size="default">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
