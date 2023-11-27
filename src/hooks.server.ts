import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import common from "./hooks/common";
import trpc from "./hooks/trpc";

export const handle: Handle = sequence(trpc, common)