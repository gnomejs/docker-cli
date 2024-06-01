import { whichSync } from "@gnome/exec";
import { docker } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@^0.224.0";

const hasDocker = whichSync("docker") !== undefined;

Deno.test(
    {
        name: "docker",
        ignore: !hasDocker,
    },
    async () => {
        const result = await docker({ help: true });
        equals(result.code, 0);
        ok(result.text().trim().startsWith("Usage"));
    },
);
