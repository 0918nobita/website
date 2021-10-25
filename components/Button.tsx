import React, { useCallback, useEffect } from 'react';

import styles from './Button.module.css';

export const Button: React.VFC = () => {
    const onClick = useCallback(() => alert('clicked'), []);

    useEffect(() => {
        console.log('effect');
    }, []);

    return (
        <div>
            <button type="button" className={styles.btn} onClick={onClick}>
                Custom Button
            </button>
        </div>
    );
};
