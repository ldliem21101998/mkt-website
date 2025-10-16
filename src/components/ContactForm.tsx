import { Button, Input, Select, Form } from "antd";
import { useMessages } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export const ContactForm = () => {
  const messages = useMessages();
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const courseData = (messages?.header.coursesMenu || []) as {
    key: string;
    title: string;
    items: { key: string; label: string }[];
  }[];

  const validateForm = () => {
    const values = form.getFieldsValue();
    const newErrors: { [key: string]: string } = {};

    if (!values.fullName?.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
    }

    if (!values.phone?.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0|\+84)(\d{9,10})$/.test(values.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Vui lòng nhập số điện thoại hợp lệ";
    }

    if (!values.email?.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Vui lòng nhập email hợp lệ";
    }

    if (!values.currentRole?.trim()) {
      newErrors.currentRole = "Vui lòng nhập bạn hiện đang là? vd: học sinh,..";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", form.getFieldsValue());
    }
  };

  const getInputClassName = (fieldName: string) => {
    const baseClass = "!bg-white";
    return errors[fieldName] ? `${baseClass} !border-red-500` : baseClass;
  };

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
          <Form form={form} className="relative">
            <div className="p-10 flex flex-col gap-6">
              <div className="text-4xl font-bold">Đừng bỏ lỡ cơ hội!</div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <div className="relative">
                      <Form.Item name="fullName" className="!mb-0">
                        <Input
                          placeholder="Họ và tên *"
                          className={getInputClassName("fullName")}
                          size="large"
                          onChange={() =>
                            setErrors((prev) => ({ ...prev, fullName: "" }))
                          }
                          suffix={
                            errors.fullName ? (
                              <ExclamationCircleOutlined className="!text-red-500" />
                            ) : null
                          }
                        />
                      </Form.Item>
                    </div>
                    <div className="text-red-500 text-sm mt-1 min-h-5">
                      {errors.fullName}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative">
                      <Form.Item name="phone" className="!mb-0">
                        <Input
                          placeholder="Số điện thoại *"
                          className={getInputClassName("phone")}
                          size="large"
                          onChange={() =>
                            setErrors((prev) => ({ ...prev, phone: "" }))
                          }
                          suffix={
                            errors.phone ? (
                              <ExclamationCircleOutlined className="!text-red-500" />
                            ) : null
                          }
                        />
                      </Form.Item>
                    </div>
                    <div className="text-red-500 text-sm mt-1 min-h-5">
                      {errors.phone}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="relative">
                    <Form.Item name="email" className="!mb-0">
                      <Input
                        placeholder="Email *"
                        className={getInputClassName("email")}
                        size="large"
                        onChange={() =>
                          setErrors((prev) => ({ ...prev, email: "" }))
                        }
                        suffix={
                          errors.email ? (
                            <ExclamationCircleOutlined className="!text-red-500" />
                          ) : null
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="text-red-500 text-sm mt-1 min-h-5">
                    {errors.email}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="relative">
                    <Form.Item name="currentRole" className="!mb-0">
                      <Input
                        placeholder="Bạn hiện đang là? vd: học sinh,.. *"
                        className={getInputClassName("currentRole")}
                        size="large"
                        onChange={() =>
                          setErrors((prev) => ({ ...prev, currentRole: "" }))
                        }
                        suffix={
                          errors.currentRole ? (
                            <ExclamationCircleOutlined className="!text-red-500" />
                          ) : null
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="text-red-500 text-sm mt-1 min-h-5">
                    {errors.currentRole}
                  </div>
                </div>
                <div className="flex flex-col">
                  <Form.Item name="course" className="!mb-0">
                    <Select
                      size="large"
                      className={` [&_.ant-select-selector]:!bg-white [&_.ant-select-selector]:${
                        errors.course ? "!border-red-500" : "border-gray-300"
                      }`}
                      options={courseData.map((course) => ({
                        label: course.title,
                        title: course.key,
                        options: course.items.map((item) => ({
                          label: item.label,
                          value: item.key,
                        })),
                      }))}
                      placeholder="Khóa học quan tâm"
                      onChange={() =>
                        setErrors((prev) => ({ ...prev, course: "" }))
                      }
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-col mt-[22px]">
                  <Form.Item name="content" className="!mb-0">
                    <TextArea
                      placeholder="Nội dung"
                      className={`${getInputClassName("content")}`}
                      size="large"
                      rows={4}
                      onChange={() =>
                        setErrors((prev) => ({ ...prev, content: "" }))
                      }
                    />
                  </Form.Item>
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="w-fit mt-[22px]"
                  onClick={handleSubmit}
                >
                  Gửi thông tin
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
