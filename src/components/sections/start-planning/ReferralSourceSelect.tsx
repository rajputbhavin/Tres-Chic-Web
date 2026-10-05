import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, ChevronRight, Sparkles } from "lucide-react";

import { FieldLabel, fieldClass } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";

interface ReferralSourceSelectProps {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  hasError?: boolean;
}

const MAIN_OPTIONS = [
  { id: "instagram", label: "Instagram" },
  { id: "google", label: "Google" },
  { id: "referral", label: "Referral" },
  { id: "weddingwire", label: "WeddingWire or The Knot" },
  {
    id: "ai",
    label: "AI (Search & Assistant)",
    isParent: true,
    subOptions: [
      { id: "chatgpt", label: "ChatGPT", fullValue: "AI (ChatGPT)" },
      { id: "gemini", label: "Gemini", fullValue: "AI (Gemini)" },
      { id: "claude", label: "Claude", fullValue: "AI (Claude)" },
      { id: "other_ai", label: "Other AI", fullValue: "AI (Other AI)" },
    ],
  },
  { id: "other", label: "Other" },
];

export function ReferralSourceSelect({
  id = "referral_source",
  label,
  value,
  onChange,
  required = true,
  placeholder = "Select *",
  hasError = false,
}: ReferralSourceSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAiHovered, setIsAiHovered] = useState(false);
  const [isAiMobileExpanded, setIsAiMobileExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const aiOptionRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsAiHovered(false);
        setIsAiMobileExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
    setIsAiHovered(false);
    setIsAiMobileExpanded(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <FieldLabel htmlFor={id}>
        {label} {required && !label.includes("*") ? "*" : ""}
      </FieldLabel>

      {/* Hidden native input for required HTML5 form validation */}
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        required={required}
        readOnly
        aria-hidden="true"
        onInvalid={(e) => {
          (e.target as HTMLInputElement).setCustomValidity("Please select how you found us.");
        }}
        onInput={(e) => {
          (e.target as HTMLInputElement).setCustomValidity("");
        }}
        className="absolute bottom-0 left-0 h-0 w-0 opacity-0 pointer-events-none"
        tabIndex={-1}
      />

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          fieldClass,
          "flex items-center justify-between text-left cursor-pointer select-none",
          !value && "text-muted-foreground/60",
          hasError && "border-destructive text-destructive focus:border-destructive"
        )}
      >
        <span className="truncate">
          {value ? (
            <span className="text-foreground font-medium flex items-center gap-1.5">
              {value.startsWith("AI") && <Sparkles className="size-3 text-gold" />}
              {value}
            </span>
          ) : (
            placeholder
          )}
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-300 shrink-0",
            isOpen && "rotate-180 text-gold",
            hasError && "text-destructive"
          )}
        />
      </button>

      {hasError && (
        <p className="mt-1.5 text-xs text-destructive font-medium animate-in fade-in-50 duration-200">
          Please select how you found us.
        </p>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full sm:min-w-[280px] rounded-xs border border-gold/40 bg-neutral-soft/98 backdrop-blur-md shadow-2xl py-1.5 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
          {MAIN_OPTIONS.map((option) => {
            if (option.isParent) {
              return (
                <div
                  key={option.id}
                  ref={aiOptionRef}
                  className="relative"
                  onMouseEnter={() => setIsAiHovered(true)}
                  onMouseLeave={() => setIsAiHovered(false)}
                >
                  {/* AI Parent Row */}
                  <div
                    onClick={() => setIsAiMobileExpanded((prev) => !prev)}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 text-xs uppercase tracking-wider transition-colors cursor-pointer group",
                      value.startsWith("AI")
                        ? "bg-emerald/10 text-emerald font-semibold"
                        : "text-foreground hover:bg-neutral-soft hover:text-emerald"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="size-3.5 text-gold group-hover:rotate-12 transition-transform" />
                      <span>{option.label}</span>
                    </span>
                    <ChevronRight
                      className={cn(
                        "size-3.5 text-taupe transition-transform duration-200",
                        (isAiHovered || isAiMobileExpanded) && "translate-x-0.5 text-gold rotate-90 sm:rotate-0"
                      )}
                    />
                  </div>

                  {/* Desktop Side Flyout Submenu */}
                  {isAiHovered && (
                    <div className="hidden sm:block absolute left-full top-0 ml-1.5 min-w-[200px] rounded-xs border border-gold/40 bg-neutral-soft/98 backdrop-blur-md shadow-2xl py-1.5 z-50 animate-in fade-in-50 slide-in-from-left-2 duration-150">
                      <div className="px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-widest text-gold border-b border-border/40 mb-1">
                        Select AI Platform
                      </div>
                      {option.subOptions?.map((sub) => {
                        const isSelected = value === sub.fullValue;
                        return (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleSelect(sub.fullValue)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2 text-xs uppercase tracking-wider text-left transition-colors cursor-pointer",
                              isSelected
                                ? "bg-emerald text-ivory font-semibold"
                                : "text-foreground hover:bg-neutral-soft hover:text-emerald"
                            )}
                          >
                            <span>{sub.label}</span>
                            {isSelected && <Check className="size-3.5 text-gold shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Mobile Inline Accordion Submenu */}
                  {isAiMobileExpanded && (
                    <div className="sm:hidden bg-neutral-soft/80 border-y border-border/40 py-1 pl-4">
                      {option.subOptions?.map((sub) => {
                        const isSelected = value === sub.fullValue;
                        return (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleSelect(sub.fullValue)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2 text-xs uppercase tracking-wider text-left transition-colors cursor-pointer",
                              isSelected
                                ? "bg-emerald text-ivory font-semibold"
                                : "text-foreground hover:text-emerald"
                            )}
                          >
                            <span>{sub.label}</span>
                            {isSelected && <Check className="size-3.5 text-gold shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isSelected = value === option.label;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.label)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 text-xs uppercase tracking-wider text-left transition-colors cursor-pointer",
                  isSelected
                    ? "bg-emerald/15 text-emerald font-semibold"
                    : "text-foreground hover:bg-neutral-soft hover:text-emerald"
                )}
              >
                <span>{option.label}</span>
                {isSelected && <Check className="size-3.5 text-emerald shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
