import { createClient } from "@supabase/supabase-js";
var db = createClient("https://placeholder.supabase.co", "placeholder_key");
//#endregion
export { db as t };
