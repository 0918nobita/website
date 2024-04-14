/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="svelte" />

interface Window {
    changeTheme: (
        doc: Document,
        theme: 'match-system' | 'dark' | 'light',
    ) => void;
}
