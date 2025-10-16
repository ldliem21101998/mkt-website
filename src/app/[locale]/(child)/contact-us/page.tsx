"use client";

// import { useState } from "react";
// import { useTranslations, useMessages } from "next-intl";

// type Course = {
//   key: string;
//   label: string;
// };

// type CourseGroup = {
//   key: string;
//   label: string;
//   courses: Course[];
// };

export default function ContactUsPage() {
  // const t = useTranslations("contact");
  // const messages = useMessages();

  // const [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   course: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  // ) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const { name, phone, email, course } = form;

  //   if (!name || !phone || !email || !course) {
  //     alert(t("requiredFields"));
  //     return;
  //   }

  //   try {
  //     const res = await fetch(`/api/submit-form`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });

  //     // const data = await res.json();

  //     if (res.ok) {
  //       alert(t("success"));
  //       setForm({ name: "", phone: "", email: "", course: "", message: "" });
  //     } else {
  //       alert(t("error"));
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // const courseGroups = (messages?.courseGroups || []) as CourseGroup[];

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      {/* <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-[#9F0A0B]">
        {t("title")}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiUser className="text-[#9F0A0B] mr-2" />
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
          <FiPhone className="text-[#9F0A0B] mr-2" />
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
          <FiMail className="text-[#9F0A0B] mr-2" />
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
          <FiBookOpen className="text-[#9F0A0B] mr-2" />
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black"
          >
            <option value="">{t("selectCourse")}</option>
            {courseGroups.map((group) => (
              <optgroup key={group.key} label={group.label}>
                {group.courses.map((course) => (
                  <option key={course.key} value={course.key}>
                    {course.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("note")}
            rows={4}
            // required
            className="w-full bg-white border border-gray-300 rounded p-3 text-black placeholder:italic"
          />
        </div>

        <FancyButton
          type="submit"
          className="w-full bg-white text-[#9F0A0B] py-2 rounded-full font-bold hover:opacity-90 transition"
        >
          {t("submit")}
        </FancyButton>
      </form> */}
    </div>
  );
}