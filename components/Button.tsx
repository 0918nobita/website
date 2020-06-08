import React from 'react';

import styles from './Button.module.css';

export const Button: React.FC = () => (
    <div>
        <button type="button" className={styles.btn}>
            Custom Button
        </button>
    </div>
);
