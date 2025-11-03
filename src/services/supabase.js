
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gxtgbjghhdihntevbsdy.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4dGdiamdoaGRpaG50ZXZic2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwOTU1NTAsImV4cCI6MjA3NzY3MTU1MH0.wVrmMEzWPlK_ML_vDELfK3R5CsVIJl8T7Hc11hfr6zQ
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase