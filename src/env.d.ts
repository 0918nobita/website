/// <reference types="astro/client" />

interface Window {
    changeTheme: (
        doc: Document,
        theme: 'match-system' | 'dark' | 'light',
    ) => void;
}
