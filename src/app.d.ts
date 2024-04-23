declare global {
    interface Document {
        startViewTransition?: (callback: () => Promise<void>) => unknown;
    }
}

export {};
