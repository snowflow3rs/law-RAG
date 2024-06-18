import InforModal from '@components/infor-modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <div>

            <InforModal />


        </div>
    )
}

export default ModalProvider