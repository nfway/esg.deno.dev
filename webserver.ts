import { serve } from "https://deno.land/std/http/server.ts";
import staticFiles from "https://deno.land/x/static_files/mod.ts";

const serveFiles = (req: Request) => staticFiles('./')({ 
    request: req, 
    respondWith: (r: Response) => r 
})

serve((req) => serveFiles(req), { addr: ':3000' });