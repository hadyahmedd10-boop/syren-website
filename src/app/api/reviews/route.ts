import { NextResponse } from "next/server"; 
import { createClient } from "@supabase/supabase-js"; 
 
const supabase = createClient( 
  process.env.SUPABASE_URL!, 
  process.env.SUPABASE_KEY! 
); 
 
export async function POST(req: Request) { 
  try {
    const body = await req.json(); 
  
    const { error } = await supabase.from("reviews").insert([ 
      { 
        name: body.name || "Anonymous", 
        email: body.email,
        review: body.review, 
        experience: body.experience, 
        rating: body.rating,
        approved: false, 
      }, 
    ]); 
  
    if (error) { 
      return NextResponse.json({ error: error.message }, { status: 500 }); 
    } 
  
    return NextResponse.json({ success: true }); 
  } catch (err) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
