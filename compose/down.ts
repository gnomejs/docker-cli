import type { CommandOptions } from "@gnome/exec";
import { type ComposeGlobalArgs, DockerComposeCommand } from "./compose.ts";

export interface DownArgs extends ComposeGlobalArgs {
    dryRun?: boolean;
    removeOrphans?: boolean;
    rmi?: "all" | "local";
    services?: string[];
    timeout?: number;
    volumes?: boolean;
}

export function down(args: DownArgs, options?: CommandOptions): DockerComposeCommand {
    args.splat ??= {};
    args.splat.command = ["up"];
    args.splat.arguments = ["services"];
    args.splat.appendArguments = true;

    return new DockerComposeCommand(args, options);
}
