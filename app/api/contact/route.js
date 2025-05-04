// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const { name, email, message } = await request.json();

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Configure your email service
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or your email service (e.g., 'outlook', 'yahoo')
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD, // Use an app password for Gmail
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVING_EMAIL || process.env.EMAIL_USER,
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { success: true, message: "Message sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }
