/**
 * `lucide-astro` ships per-icon components at `lucide-astro/<IconName>`, but
 * its type files are named `<IconName>.d.astro.ts`, which TypeScript will not
 * pair with the `.astro` implementation. The build resolves these fine through
 * Vite; this declaration only stops the editor from flagging every icon import.
 */
declare module 'lucide-astro/*' {
  const Icon: (props: {
    size?: number | string;
    color?: string;
    fill?: string;
    strokeWidth?: number | string;
    class?: string;
    [key: string]: unknown;
  }) => unknown;
  export default Icon;
}
