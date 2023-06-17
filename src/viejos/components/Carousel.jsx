import {Component} from 'react';

class Carousel extends Component {
	satate = {
		active: 0,
	};

	satatic defaultProps = {
		images: [''],
	};

	render() {
		const {active} this.state;
		const {images} this.props;

		return (
		<div className="carousel">
			<img src={images[active]} alt="" />
			<div class="carousel-smaller">

			</div>
		</div>
		);
	}
}