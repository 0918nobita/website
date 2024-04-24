declare global {
    interface Document {
        startViewTransition?: (callback: () => Promise<void>) => unknown;
    }

    interface Window {
        initialTheme: 'dark' | 'light';
        applyTheme: () => void;
    }
}

export {};
