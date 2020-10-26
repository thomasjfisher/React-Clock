import React from "react"
import "./Clock.css"

const Clock = props => {
	const { date } = props
	const seconds = date.getSeconds()
	const minutes = date.getMinutes()
	const hours = date.getHours()

	return (
		<div className="container">
			<div className="clock-face">
				<div className="clock">
					<div className="hours-container">
						<div
							className="hours"
							style={{ transform: `rotateZ(${hours * 30 + minutes / 2}deg)` }}
						></div>
					</div>
					<div className="minutes-container">
						<div className="minutes" style={{ transform: `rotateZ(${minutes * 6}deg)` }}></div>
					</div>
					<div className="seconds-container">
						<div className="seconds" style={{ transform: `rotateZ(${seconds * 6}deg)` }}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Clock
