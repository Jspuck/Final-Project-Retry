// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://skfseollkfimrvalryak.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrZnNlb2xsa2ZpbXJ2YWxyeWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MTQ5MjcsImV4cCI6MjAzMDA5MDkyN30.XWF32gv-1U8LDs-QYxY9sjdPDPPZv2sOvjq8JFM-F-c'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
