function renderCourses() {
	const quarters = {
		"Quarter One": ["CSD110", "CSD112", "ENGL&101"],
		"Quarter Two": ["CS&141", "CSD122", "CSD138"],
		"Quarter Three": ["CS141", "CSD268", "MATH141"],
		"Quarter Four": ["ART102", "PHYS114", "SOC101"],
		"Quarter Five": ["CSD230", "CSD275", "CSD233"],
	};

	const container = document.getElementById("course-container");

	for (const [quarter, courseIds] of Object.entries(quarters)) {
		const quarterDiv = document.createElement("div");
		quarterDiv.classList.add("quarter");

		const quarterTitle = document.createElement("h3");
		quarterTitle.textContent = quarter;
		quarterDiv.appendChild(quarterTitle);

		courseIds.forEach((id) => {
			const course = getCourse(id);
			if (course) {
				const courseElement = document.createElement("div");
				courseElement.classList.add("course-item");
				courseElement.dataset.courseId = course.id;

				const courseText = document.createElement("span");
				courseText.textContent = `${course.id} ${course.name} 5 credits`;
				courseElement.appendChild(courseText);

				if (course.prereqs && course.prereqs.length > 0) {
					// Create "BEGIN" button for courses with prerequisites
					const beginButton = document.createElement("button");
					beginButton.textContent = "BEGIN";
					beginButton.classList.add("begin-button");
					beginButton.onclick = () =>
						highlightPrereqs(course.prereqs);
					courseElement.appendChild(beginButton);
				} else {
					// Highlight courses with no prerequisites in green
					courseElement.classList.add("highlight-green");
				}

				quarterDiv.appendChild(courseElement);
			}
		});

		container.appendChild(quarterDiv);
	}
}

function highlightPrereqs(prereqs) {
	document.querySelectorAll(".course-item").forEach((course) => {
		const courseId = course.dataset.courseId;

		if (prereqs.some((prereq) => prereq.id === courseId)) {
			course.classList.add("highlight-grey");

			// Remove highlight after 3 seconds
			setTimeout(() => {
				course.classList.remove("highlight-grey");
			}, 3000);
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	initializeCSDAASTCourses(); // Corrected function call
	renderCourses();
});
