import React from 'react'

function Skeleton() {
	return (
		<div className="row flex-column">
			<div className="skeleton col mt-2 pt-4 pb-5 rounded"></div>
			<div className="skeleton col mt-2 pt-4 pb-5 rounded"></div>
			<div className="skeleton col mt-2 pt-4 pb-5 rounded"></div>
			<div className="skeleton col mt-2 pt-4 pb-5 rounded"></div>
		</div>
	)
}

export default Skeleton