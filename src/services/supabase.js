import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://cfhkfujlnzthrmcfndpm.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmaGtmdWpsbnp0aHJtY2ZuZHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTEyMTMsImV4cCI6MjA3ODA4NzIxM30.d5WvhwIJ9yU6k1lmib77ykOTHzh_5uds_YH18V-CMOg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
