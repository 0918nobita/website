declare global {
    interface Window {
        initialTheme: 'dark' | 'light';
        applyTheme: () => void;
    }
}

export {};
