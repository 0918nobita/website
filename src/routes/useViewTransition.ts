import { onNavigate } from "$app/navigation";

export const useViewTransition = (): void => {
    onNavigate((navigation) => {
        if (document.startViewTransition === undefined) return;

        return new Promise((resolve) => {
            document.startViewTransition?.(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
};
