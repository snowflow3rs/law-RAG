import InforModal from '@components/infor-modal';
import UploadFile from '@components/upload/upload-file';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
    const [isMounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <div>

            <UploadFile />


        </div>
    )
}

export default ModalProvider