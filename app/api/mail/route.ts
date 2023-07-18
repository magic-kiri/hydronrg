// import type { NextApiRequest, NextApiResponse } from "next";
// // import { render } from "@react-email/render";
// // import WelcomeTemplate from "../../emails/WelcomeTemplate";
// // import { sendEmail } from "../../lib/email";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // await sendEmail({
//   //   to: "kiran@example.com",
//   //   subject: "Welcome to NextAPI",
//   //   html: render(WelcomeTemplate()),
//   // });

//   console.log(req.body)

// }

import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const res = await request.json()
  
  console.log(res)

  return NextResponse.json({ res })
  // status(200).json({ message: "Email sent successfully" });
  // return NextResponse.json({ data })
}