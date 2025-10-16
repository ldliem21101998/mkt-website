import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "postal.aspirely.edu.vn",
  port: 587,
  secure: false,
  tls: {
    rejectUnauthorized: true,
  },
  auth: {
    user: "noreply@aspirely.edu.vn",
    pass: process.env.POSTAL_PASSWORD,
  },
});

function formatDateTime(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export async function POST(req: NextRequest) {
  const { name, phone, email, course } = await req.json();

  if (!name || !phone || !email || !course) {
    return NextResponse.json({ message: "Thiếu thông tin." }, { status: 400 });
  }

  const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = formatDateTime(new Date());
    const formattedPhone = `'${phone}`;

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Form!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, formattedPhone, email, course]],
      },
    });

    await transporter.sendMail({
      from: '"Aspirely" <noreply@aspirely.edu.vn>',
      to: email,
      subject: "Đăng ký học thử thành công",
      html: `<p>Chào ${name},</p><p>Bạn đã đăng ký khoá học <strong>${course}</strong>. Chúng tôi sẽ liên hệ sớm.</p>`,
    });

    return NextResponse.json({ message: "OK" });
  } catch (err) {
    console.error("SUBMIT ERROR", err);
    return NextResponse.json({ message: "Lỗi hệ thống." }, { status: 500 });
  }
}
