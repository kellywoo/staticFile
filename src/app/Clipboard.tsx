import React, { PropsWithChildren, useCallback } from 'react'
import copyToClipboard from 'copy-to-clipboard'
import styled from 'styled-components'

const Button = styled.button`
	text-align: left;
	background-color: purple;
	border: none;
	border: 1px solid #fff;
	color: #fff;
	border-radius: 5px;
	padding: 10px;
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
	const onClick = useCallback(() => {
		const done = copyToClipboard(text)
	}, [text])
	return (
		<Button onClick={onClick} className={className} data-action-id={'copy'}>
			{children || text}
		</Button>
	)
}
