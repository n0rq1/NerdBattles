import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function getServerSideProps({ req }) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get('code');
  
  if (code) {
    const cookieStore = cookies({ req });
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return {
    redirect: {
      destination: requestUrl.origin,
      permanent: false,
    },
  };
}

export default function Callback() {
  // This component is only needed to export getServerSideProps
  // You can leave it empty or add any content you want
  return null;
}
