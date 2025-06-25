import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { router, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  //
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (session && session?.user.id) {
    console.log('root/layout: ', { session });
    router.replace('/(root)/(tabs)/home');
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
