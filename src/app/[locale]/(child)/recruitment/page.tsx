"use client"

import { useState } from "react";
import { User, Phone, Mail, File } from "lucide-react";
import { useTranslations } from "next-intl";

import FancyButton from "@/components/FancyButton";

export default function RecruitmentPage() {
  const t = useTranslations("recruitment")

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    cv: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email || !form.cv) return
    setSubmitted(true)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-[#9F0A0B]">
        {t("title")}
      </h1>

      {submitted ? (
        <p className="text-green-600 text-center text-lg">{t("success")}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-white rounded p-2 border border-gray-300">
            <User className="text-[#9F0A0B] mr-2" />
            <input
              name="name"
              placeholder={t("name")}
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-black placeholder:italic"
            />
          </div>

          <div className="flex items-center bg-white rounded p-2 border border-gray-300">
            <Phone className="text-[#9F0A0B] mr-2" />
            <input
              name="phone"
              placeholder={t("phone")}
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-black placeholder:italic"
            />
          </div>

          <div className="flex items-center bg-white rounded p-2 border border-gray-300">
            <Mail className="text-[#9F0A0B] mr-2" />
            <input
              name="email"
              placeholder={t("email")}
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-black placeholder:italic"
            />
          </div>

          <div className="flex items-center bg-white rounded p-2 border border-gray-300">
            <File className="text-[#9F0A0B] mr-2" />
            <input
              name="cv"
              placeholder={t("cv")}
              value={form.cv}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-black placeholder:italic"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("message")}
              rows={4}
              className="w-full bg-white border border-gray-300 rounded p-3 text-black placeholder:italic"
            />
          </div>

          <FancyButton
            type="submit"
            className="w-full bg-white text-[#9F0A0B] py-2 rounded-full font-bold hover:opacity-90 transition"
          >
            {t("submit")}
          </FancyButton>
        </form>
      )}
    </div>
  )
}