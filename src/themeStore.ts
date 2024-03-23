import { atom, type WritableAtom } from 'nanostores';

export const theme: WritableAtom<'light' | 'dark' | 'match-system'> =
    atom('match-system');

const savedValue = localStorage.getItem('theme');

const initialTheme = (() => {
    if (savedValue === null || savedValue === 'match-system')
        return 'match-system';
    if (savedValue === 'dark') return 'dark';
    return 'light';
})();

theme.set(initialTheme);
