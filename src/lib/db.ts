import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndydW5zaW1raXdtbXpvZXlwYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2OTI3ODIsImV4cCI6MjA5OTI2ODc4Mn0.HvdCVRoHg2xg4amfj3R7GXOJ_Fobuc_dw9LpVBF2QFc';

export const db = createClient(supabaseUrl, supabaseKey);

