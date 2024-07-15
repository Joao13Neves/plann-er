import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestsModal: () => void;
    openConfirmTripModal: () => void;
    emailsToInvite: string[];
}

export function InviteGuestsStep({
    openGuestsModal,
    openConfirmTripModal,
    emailsToInvite,
}: InviteGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-lg text-zinc-100 flex-1 text-left">
                    {emailsToInvite.length} pessoa(s) convidados(s)
                  </span>
                ) : (
                  <span className="text-lg text-zinc-400 flex-1 text-left">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="w-px h-6 bg-zinc-400" />

              <button
                onClick={openConfirmTripModal}
                className="bg-line-300 text-line-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-line-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
    )
}