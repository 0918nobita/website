import { onMount } from "svelte";
import { writable } from "svelte/store";

const osThemeSetting = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

export const useThemeToggle = () => {
    const currentlyAppliedTheme = writable<"dark" | "light">("light");
    const themeSetting = writable<"dark" | "light" | "match-system">(
        "match-system",
    );

    onMount(() => {
        currentlyAppliedTheme.set(window.initialTheme);

        const theme = localStorage.getItem("theme");

        if (theme === "dark") {
            themeSetting.set("dark");
        } else if (theme === "light") {
            themeSetting.set("light");
        } else {
            themeSetting.set("match-system");
        }

        themeSetting.subscribe((newSetting) => {
            switch (newSetting) {
                case "dark":
                    document.documentElement.classList.remove("light");
                    document.documentElement.classList.add("dark");
                    currentlyAppliedTheme.set("dark");
                    localStorage.setItem("theme", "dark");
                    return;
                case "light":
                    document.documentElement.classList.remove("dark");
                    document.documentElement.classList.add("light");
                    currentlyAppliedTheme.set("light");
                    localStorage.setItem("theme", "light");
                    return;
            }

            localStorage.removeItem("theme");

            const defaultTheme = osThemeSetting();

            if (defaultTheme === "dark") {
                document.documentElement.classList.remove("light");
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.classList.add("light");
            }

            currentlyAppliedTheme.set(defaultTheme);
        });
    });

    return {
        currentlyAppliedTheme,
        themeSetting,
    };
};
