import React, { PropsWithChildren, useCallback } from 'react'
import copyToClipboard from 'copy-to-clipboard'
import styled from 'styled-components'

const Button = styled.button`
	text-align: left;
`
export const Clipboard = ({
	children,
	text,
	className,
	successMessage,
	errorMessage,
	isLink,
}: PropsWithChildren<{
	text: string
	className?: string
	successMessage?: string
	errorMessage?: string
	isLink?: boolean
}>) => {
	const successMsg = isLink ? '@gt.toast.copy.success' : successMessage || '@gt.common.toast.copied'
	const errorMsg = isLink ? '@gt.toast.copy.error' : errorMessage || '@gt.common.toast.fail_to_copy'
	const onClick = useCallback(() => {
		const done = copyToClipboard(text)
		// toast(t(done ? successMsg : errorMsg))
	}, [text])
	return (
		<Button onClick={onClick} className={className} data-action-id={'copy'}>
			{children || text}
		</Button>
	)
}
