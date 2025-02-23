import { app } from "./app.tsx";

app.develop();

Deno.serve(app.handler);
