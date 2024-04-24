import { onNavigate } from '$app/navigation';

export const useViewTransition = () => {
    onNavigate((navigation) => {
        if (document.startViewTransition === undefined) return;

        return new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            document.startViewTransition!(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
};
