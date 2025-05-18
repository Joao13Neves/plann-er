import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/style.css";
import { ptBR } from "date-fns/locale";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

type DateType = "from" | "to" | "null";

export function DesatinationAndDateStep({
  isGuestsInputOpen,
  eventStartAndEndDates,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectionDateType, setSelectionDateType] = useState<DateType | null>(
    null
  );

  function openDatePicker(type: DateType) {
    setSelectionDateType(type);
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
    setSelectionDateType(null);
  }

  function handleSelectDate(date: Date | undefined) {
    if (!date) return;

    const current = eventStartAndEndDates || { from: undefined, to: undefined };
    const newRange: DateRange = {
      from: selectionDateType === "from" ? date : current.from,
      to: selectionDateType === "to" ? date : current.to,
    };

    setEventStartAndEndDates(newRange);
    closeDatePicker();
  }

  const displayedDateGo = eventStartAndEndDates?.from
    ? format(eventStartAndEndDates.from, "d' de 'LLL", { locale: ptBR })
    : null;

  const displayedDateBack = eventStartAndEndDates?.to
    ? format(eventStartAndEndDates.to, "d' de 'LLL", { locale: ptBR })
    : null;

  return (
    <div className="w-[820px] h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={() => openDatePicker("from")}
        disabled={isGuestsInputOpen}
        className="w-[120px] flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-60 flex-1">
          {displayedDateGo || "Ida"}
        </span>
      </button>

      <button
        onClick={() => openDatePicker("to")}
        disabled={isGuestsInputOpen}
        className="w-[120px] flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-60 flex-1">
          {displayedDateBack || "Volta"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">
                  Selecionea a data de{" "}
                  {selectionDateType === "from" ? "ida" : "volta"}
                </h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <div className="my-day-picker">
              {/* TODO: bloquear datas que já se passaram  */}
              <DayPicker
                mode="single"
                selected={
                  selectionDateType === "from"
                    ? eventStartAndEndDates?.from
                    : eventStartAndEndDates?.to
                }
                onSelect={handleSelectDate}
                disabled={(date) => date < new Date()}
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-400" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button variant="primary" size="default" onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
