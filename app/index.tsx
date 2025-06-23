import Login from '@/components/Login';
import { supabase } from '@/lib/supabase';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [sessionExist, setSessionExist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setSessionExist(true);
      }
    };
    checkSession();
  }, []);

  //
  return (
    <SafeAreaView>
      {loading && (
        <View>
          <Text className="text-2xl font-bold">Loading... </Text>
        </View>
      )}

      {sessionExist && <Redirect href={'/(root)/(tabs)/home'} />}
      {!sessionExist && <Login />}
    </SafeAreaView>
  );
}
