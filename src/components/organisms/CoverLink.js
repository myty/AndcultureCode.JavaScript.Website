import React, { Component } from 'react'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import { TimelineMax, Power1, Power2, Power3, Power4 } from 'gsap'

export default class CoverLink extends Component {
	constructor(props) {
		super(props)

		this.horizontal = this.horizontal.bind(this)
		this.vertical = this.vertical.bind(this)

		this.cover = React.createRef()
	}

	horizontal = ({ node, props: { length: seconds }, direction }) => {
		const directionTo = direction === 'left' ? '-100%' : '100%'
		const directionFrom = direction === 'left' ? '100%' : '-100%'

		const wait = seconds / 6
		const half = (seconds - wait) / 2

		return new TimelineMax()
			.set(this.cover, { y: 0, x: directionFrom, display: 'block' })
			.to(this.cover, half, {
				x: '0%',
				ease: Power1.easeInOut,
			})
			.set(node, { opacity: 0 })
			.to(
				this.cover,
				half,
				{
					x: directionTo,
					ease: Power1.easeInOut,
				},
				`+=${wait}`
			)
	}

	vertical = ({ node, props: { length: seconds }, direction, transparentBg }) => {
		const directionTo = direction === 'up' ? '-100%' : '100%'
		const directionFrom = direction === 'up' ? '100%' : '-100%'

		const wait = seconds / 6
		const half = (seconds - wait) / 2

		console.log('DirectionTo', directionTo);
		console.log('DirectionFrom', directionFrom);
		console.log('wait', wait);
		console.log('half', half);

		return new TimelineMax({onStart: () => console.log('on start')})
			// .set(transparentBg, { y: '100%' })
			// .to(transparentBg, half, {
			// 	y: '0%',
			// 	ease: Power1.easeOut,
			// })
			.set(this.cover, { y: directionFrom })
			.to(this.cover, half, {
				y: '0%',
				ease: Power1.easeInOut,
			})
			.set(node, { opacity: 0 })
			.to(
				this.cover,
				half,
				{
					y: directionTo,
					ease: Power1.easeIn,
				},
				`+=${wait}`
			)
	}

	moveInDirection = ({ props, direction, node, transparentBg }) => {
		if (direction === 'left' || direction === 'right')
			return this.horizontal({ props, direction, node })

		return this.vertical({ props, direction, node, transparentBg })
	}

	render() {
		const direction = this.props.direction || 'left'
		const length = this.props.duration || 1
		const transparentBg = document.querySelector('.transparentBg')
		const {
			exit: removedExit,
			entry: removedEntry,
			cover: removedProp,
			...props
		} = this.props
		return (
			<>
				<TransitionLink
					exit={{
						length: length,
						trigger: ({ exit, node }) =>
							this.moveInDirection({
								props: exit,
								node,
								direction,
								transparentBg
							}),
					}}
					entry={{
						delay: length / 2,
					}}
					{...props}>
					{this.props.children}
				</TransitionLink>

				<TransitionPortal>
					<div
						className="transparentBg"
						style={{
							position: 'fixed',
							background: '#19a87c',
							top: 0,
							left: 0,
							opacity: .4,
							width: '100vw',
							height: '100vh',
							transform: 'translateY(100%)',
						}}
					/>
					<div
						ref={n => (this.cover = n)}
						style={{
							position: 'fixed',
							background: this.props.bg || '#19a87c',
							top: 0,
							left: 0,
							width: '100vw',
							height: '100vh',
							transform: 'translateY(100%)',
						}}
					/>
				</TransitionPortal>
			</>
		)
	}
}