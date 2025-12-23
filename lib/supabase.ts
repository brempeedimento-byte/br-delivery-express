import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://senqbifsjqlzremfuphm.supabase.co';
const supabaseAnonKey = 'sb_publishable_VS0KfCroScCPQXj-NVbd3w_nvVHYTce';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
