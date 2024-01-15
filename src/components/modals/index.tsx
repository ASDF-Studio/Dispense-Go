"use client"
import { FC, useEffect } from 'react';
import Modal from 'react-modal';

type Props = {
    children: React.ReactNode
    open?: boolean
    setOpen?: (open: boolean) => void
    contentStyle?: React.CSSProperties
    overlayClose?: boolean
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 0,
    },
}

export const BaseModal: FC<Props> = ({ children, open = false, setOpen, contentStyle, overlayClose = true }) => {
    const handleClose = () => {
        setOpen && setOpen(false)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [open])

    return <Modal
        isOpen={open}
        // className={"modal-slide-left"}
        ariaHideApp={false}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={overlayClose}
        style={{
            content: {
                ...customStyles.content,
                ...contentStyle,
            },
            overlay: {
                zIndex: 1000,
                background: "rgba(0, 0, 0, 0.80)",
            }
        }}
    >
        {children}
    </Modal>
}