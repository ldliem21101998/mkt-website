import Image from "next/image";
import React from "react";
import { Button, Input } from "antd";
import { Select } from "antd";
import { useMessages } from "next-intl";

const { TextArea } = Input;
export const ContactForm = () => {
  const messages = useMessages();
  const courseData = (messages?.header.coursesMenu || []) as {
    key: string;
    title: string;
    items: { key: string; label: string }[];
  }[];

  return (
    <div className="container mx-auto px-4 max-w-[1248px] py-16">
      <div className="grid grid-cols-2 bg-[#edf7ff] rounded-3xl">
        <Image
          src="/assets/images/ContactForm/banner-contact-form.png"
          alt="Contact Form"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="relative">
          <Image
            src="/assets/images/ContactForm/left-corner-geometric-contact-form.png"
            width={80}
            height={89}
            alt="left-corner-geometric-contact-form"
            className="absolute top-0 left-0"
          />
          <Image
            src="/assets/images/ContactForm/right-corner-geometric-contact-form.png"
            width={200}
            height={200}
            alt="right-corner-geometric-contact-form"
            className="absolute bottom-0 right-0"
          />
          <form className="relative">
            <div className="p-10 flex flex-col gap-6">
              <div className="text-4xl font-bold">Đừng bỏ lỡ cơ hội!</div>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    placeholder="Họ và tên"
                    className="!bg-white"
                    size="large"
                  />
                  <Input
                    placeholder="Số điện thoại"
                    className="!bg-white"
                    size="large"
                  />
                </div>
                <Input placeholder="Email" className="!bg-white" size="large" />
                <Input
                  placeholder="Bạn hiện đang là? vd: học sinh,.."
                  className="!bg-white"
                  size="large"
                />
                <Select
                  size="large"
                  className="!bg-white [&_.ant-select-selector]:!bg-white [&_.ant-select-selector]:!border-gray-300"
                  options={courseData.map((course) => ({
                    label: course.title,
                    title: course.key,
                    options: course.items.map((item) => ({
                      label: item.label,
                      value: item.key,
                    })),
                  }))}
                  placeholder="Khóa học quan tâm"
                />
                <TextArea
                  placeholder="Nội dung"
                  className="!bg-white"
                  size="large"
                  rows={4}
                />
                <Button type="primary" size="large" className="w-fit">
                  Gửi thông tin
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
