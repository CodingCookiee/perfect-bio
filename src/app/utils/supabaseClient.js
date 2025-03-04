import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if the environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anonymous Key is missing. Make sure to set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

// Create a single supabase client for interacting with your database
const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

export default supabase;

// Example usage:
// import supabase from '@/app/utils/supabaseClient';
//
// // Query data
// const { data, error } = await supabase
//   .from('bios')
//   .select('*')
//   .eq('user_id', userId);
//
// // Insert data
// const { data, error } = await supabase
//   .from('bios')
//   .insert([
//     { 
//       user_id: userId,
//       title: 'LinkedIn Bio',
//       content: bioContent,
//       platform: 'LinkedIn'
//     }
//   ]);
