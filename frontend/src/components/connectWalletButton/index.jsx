import React from 'react';
import { Button, ButtonProps, useWalletModal } from '@pancakeswap-libs/uikit'
import { useI18 } from '../../hooks/useI18n'
import { useAuth } from '../../hooks/useAuth'

export function UnlockButton(props) { 

    const TranslateString = useI18()
    const { login, logout } = useAuth()
    const { onPresentConnectModal } = useWalletModal(login, logout)

    return (
        <Button onClick={onPresentConnectModal} {...props}>
            {TranslateString(292, 'Unlock Wallet')}
        </Button>
    )

}

