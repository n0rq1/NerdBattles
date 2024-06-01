import {createMiddlewareClient} from 'supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'

/* This way the session doesn't falsely log a user out */
export async function middleware(req){
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req,res});
    await supabase.auth.getSession(); /* update cookie */
    return res;
}