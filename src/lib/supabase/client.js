import { createClient } from '@supabase/supabase-js'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dWVxdXN0Z2xiY2tzb3FjZmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2NTcxMDcsImV4cCI6MjAxMDIzMzEwN30.wLjFCjygcwQN6RjacE_HnUYqkA3IS7hZDvN1Jgl2RS0'
const API_URL = 'https://gtuequstglbcksoqcfar.supabase.co'
export const supabase = createClient(API_URL, API_KEY)