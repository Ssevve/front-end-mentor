const testimonials = [
	{
		name: 'Tanya Sinclair',
		position: 'UX Engineer',
		image: 'image-tanya.jpg',
		quote: `I’ve been interested in coding for a while but never taken the jump,
					  until now. I couldn’t recommend this course enough. I’m now in the job
					  of my dreams and so excited about the future.`,
	},
	{
		name: 'John Tarkpor',
		position: 'Junior Front-end Developer',
		image: 'image-john.jpg',
		quote: `If you want to lay the best foundation possible I’d recommend taking this course. 
            The depth the instructors go into is incredible. I now feel so confident about 
            starting up as a professional developer.`,
	},
];

const container = document.querySelector('.container');

function showTestimonial(testimonial) {
	const { name, position, image, quote } = testimonial;

	const markup = `
    <div class="top">
      <img
        class="person-image"
        src="./images/${image}"
        alt="${name}"
      />
      <div class="slider">
        <button class="btn" data-goto="previous">
          <img class="arrow" src="./images/icon-prev.svg" alt="Previous testimonial" data-goto="previous" />
        </button>
        <button class="btn"  data-goto="next">
          <img class="arrow" src="./images/icon-next.svg" alt="Next testimonial" data-goto="next" />
        </button>
        </div>
    </div>

    <div class="bottom">
      <p class="quote">
        “ ${quote} ”
      </p>

      <p class="person-name">${name}</p>
      <p class="person-position">${position}</p>
    </div>
  `;

	container.insertAdjacentHTML('afterbegin', markup);
}

function clearTestimonial() {
	container.innerHTML = '';
}

container.addEventListener('click', (e) => {
	if (e.target.matches('.btn, .btn *')) {
		const type = e.target.dataset.goto;

		switch (type) {
			case 'previous':
				slide -= 1;
				slide < 0 ? (slide = testimonials.length - 1) : (slide = slide);
				break;
			case 'next':
				slide += 1;
				slide >= testimonials.length ? (slide = 0) : (slide = slide);
				break;
		}

		clearTestimonial();
		showTestimonial(testimonials[slide]);
	}
});

let slide = 0;
showTestimonial(testimonials[slide]);
