"use client"
import { ReactNode, MouseEvent } from "react";
import clsx from "clsx";

type FancyButtonProps = {
  children: ReactNode
  className?: string
  onClick?: (() => void) | ((e: MouseEvent<HTMLButtonElement>) => void)
  type?: "button" | "submit" | "reset"
  variant?: "solid" | "outline"
  color?: string
  textColor?: string
}

export default function FancyButton({
  children,
  className,
  onClick,
  type = "button",
  variant = "solid",
  color = "#9F0A0B",
  textColor,
}: FancyButtonProps) {
  const isOutline = variant === "outline"
  const hoverColor = "#0D356B"

  return (
    <button
      type={type}
      onClick={(e) => {
        if (onClick) onClick(e)
      }}
      className={clsx(
        "relative overflow-hidden rounded-full font-bold group transition-all duration-300 cursor-pointer",
        isOutline ? "bg-transparent border" : "",
        className
      )}
      style={{
        backgroundColor: isOutline ? "transparent" : color,
        borderColor: isOutline ? color : undefined,
        color: isOutline ? (textColor || color) : (textColor || "white"),
      }}
    >
      <span
        className={clsx(
          "relative z-10 px-6 py-2 block transition-colors duration-300",
          "group-hover:text-white"
        )}
      >
        {children}
      </span>
      <span
        className="pointer-events-none absolute inset-0 z-0 transition-transform duration-300 translate-x-full group-hover:translate-x-0"
        style={{ backgroundColor: hoverColor }}
      />
    </button>
  )
}