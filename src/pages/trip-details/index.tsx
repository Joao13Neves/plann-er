import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-400">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-400">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-400"></div>

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-line-300 text-line-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-line-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text=dxl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text=dxl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-line-300" />
                  <span className="text-line-100">Corrida de Kart</span>
                  <span className="text-zinc-400 text-sm ml-auto">10:00h</span>
                </div>
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleDashed className="size-5 text-zinc-400" />
                  <span className="text-line-100">Jantar</span>
                  <span className="text-zinc-400 text-sm ml-auto">21:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
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
            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800"></div>

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
              <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <UserCog className="size-5" />
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">
                  Cadastrar atividade
                </h2>
                <button type="button" onClick={closeCreateActivityModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400 py-2">
              Todos convidados podem visualizar as atividades.
              </p>
            </div>

            <form className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="size-5 text-zinc-400" />
                <input
                  name="title"
                  placeholder="Qual a atividade?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

                <div className="flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Calendar className="size-5 text-zinc-400" />
                  <input
                    type="datatime-local"
                    name="occurs_at"
                    placeholder="Data e hora da atividade"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
                  />
                </div>

              <button
                type="submit"
                className="bg-line-300 text-line-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-line-400"
              >
                Salvar atividade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
