declare global {
    interface Document {
        startViewTransition?: (callback: () => Promise<void>) => unknown;
    }

    interface Window {
        applyTheme: () => void;
    }
}

export {};
