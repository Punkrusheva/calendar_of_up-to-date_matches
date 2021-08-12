import React from 'react';
import Loader from "react-loader-spinner";
import styles from './Loader.module.css';

function Load() {
    return (
        <Loader className={styles.loader}
            type="ThreeDots"
            color="#0008FF"
            height={45}
            width={45}
            timeout={2500}
        />)
};

export default Load;