import { ReactNode, useEffect, useState } from 'react'

const useButton = () => {
	return {}
}

export enum ButtonScheme {
	black = 'black',
	white = 'white'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	scheme?: ButtonScheme
	children: ReactNode
}

const Button = ({
	scheme = ButtonScheme.black,
	children,
	className,
	...props
}: ButtonProps) => {
	const { } = useButton()

	return (
		<>
			<button
				className={`text-md z-50 flex items-center gap-2 rounded-full px-4 py-3 font-backup font-satoshi uppercase font-semibold hover:scale-[98%] active:scale-95 transition-all lg:px-6 lg:py-5 ${{
					[ButtonScheme.black]: 'bg-black text-white',
					[ButtonScheme.white]: 'bg-white text-black'
				}[scheme]
					} ${className}}`}
				{...props}
			>
				{children}
			</button>
		</>
	)
}

export default Button
