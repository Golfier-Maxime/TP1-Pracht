import { createClient } from '@supabase/supabase-js'
import { ref } from "@vue/reactivity";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// Pour tester dans la console, dé-commenter la ligne qui suit :
globalThis.supabase = supabase

// une donnée réactive stockant l'objet représentant l'utilisateur dans l'API de supabase
export const user = ref(supabase.auth.user())
supabase.auth.onAuthStateChange(() => {
    user.value = supabase.auth.user()
})