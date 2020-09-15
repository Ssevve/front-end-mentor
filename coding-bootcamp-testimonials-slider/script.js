const testimonials = [
	{
		name: 'Tanya Sinclair',
		position: 'UX Engineer',
		imageName: 'image-tanya',
		quote: `I’ve been interested in coding for a while but never taken the jump,
					  until now. I couldn’t recommend this course enough. I’m now in the job
					  of my dreams and so excited about the future.`,
	},
	{
		name: 'John Tarkpor',
		position: 'Junior Front-end Developer',
		imageName: 'image-john',
		quote: `If you want to lay the best foundation possible I’d recommend taking this course. 
            The depth the instructors go into is incredible. I now feel so confident about 
            starting up as a professional developer.`,
	},
];

function changeTestimonial(testimonial) {
	const { name, position, imageName, quote } = testimonial;

	document.querySelector('.quote').textContent = `“ ${quote} ”`;
	document.querySelector('.person-name').textContent = name;
	document.querySelector('.person-position').textContent = position;
	document.querySelector('.person-image').src = `./images/${imageName}.jpg`;
}

let slide = 0;
document.querySelector('.slider').addEventListener('click', (e) => {
	const type = e.target.closest('.btn').dataset.goto;

	switch (type) {
		case 'previous':
			slide === 0 ? (slide = testimonials.length - 1) : slide--;
			break;
		case 'next':
			slide === testimonials.length - 1 ? (slide = 0) : slide++;
			break;
	}

	changeTestimonial(testimonials[slide]);
});
