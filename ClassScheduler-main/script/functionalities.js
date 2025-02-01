function initializeCSDAASTCourses() {
	var csd110 = createCourse("CSD110", "Computer Programming Fundamentals with Python");
	var csd112 = createCourse("CSD112", "HTML and CSS");
	var engl101 = createCourse("ENGL&101", "English Composition I");

	var cs141 = createCourse("CS&141", "Computer Science I Java", [csd110]);
	var csd122 = createCourse("CSD122", "JavaScript", [csd110, csd112]);
	var csd138 = createCourse("CSD138", "Structured Query Language", [csd110]);

	var cs143 = createCourse("CS&143", "Computer Science II Java", [cs141]);
	var csd268 = createCourse("CSD268", "Quality Assurance Methodologies", [cs141]);
	var math141 = createCourse("MATH&141", "Pre-Calculus I");

	var art102 = createCourse("ART102", "Introduction to 2D Design");
	var phys114 = createCourse("PHYS114", "General Physics I w/Lab");
	var soc101 = createCourse("SOC101", "Introduction to Sociology");

	var csd228 = createCourse("CSD228", "Programming with C#", [cs141]);

	var csd230 = createCourse("CSD230", "Programming For Mobile Devices", [[cs143, csd228]]);
	var csd275 = createCourse("CSD275", "PHP Scripting", [csd110, csd112]);
	var csd233 = createCourse("CSD233", "C++ Programming", [cs143]);

	
	var csd298 = createCourse("CSD298", "Technical Interview/Job Search", [cs143]);
	var dsgn290 = createCourse("DSGN290", "Portfolio/Job Search", [art102]);
	var csd297 = createCourse("CSD297", "IT Project", [csd112, csd122, csd138, cs141, [csd228, csd268]]);
}

courseElementMap = {};

function renderCourses() {
	const quarters = {
		"Quarter One": ["CSD110", "CSD112", "ENGL&101"],
		"Quarter Two": ["CS&141", "CSD122", "CSD138"],
		"Quarter Three": ["CS&143", "CSD268", "MATH&141"],
		"Quarter Four": ["ART102", "PHYS114", "SOC101"],
		"Quarter Five": ["CSD230", "CSD275", "CSD233"],
		"Quarter Six": ["CSD228", "CSD298", "DSGN290", "CSD297"]
	};

	const container = document.getElementById("course-container");

	for (const [quarter, courseIds] of Object.entries(quarters)) {
		const quarterDiv = document.createElement("div");
		quarterDiv.classList.add("quarter");

		// set quarterTitle
		const quarterTitle = document.createElement("h3");
		quarterTitle.textContent = quarter;
		quarterDiv.appendChild(quarterTitle);

		courseIds.forEach((id) => {
			const course = courses[id];
			if (course) {
				const courseElement = document.createElement("div");
				courseElement.classList.add("course-item");
				courseElement.dataset.courseId = course.id;

				const courseText = document.createElement("span");
				courseText.textContent = `${course.id} ${course.name} 5 credits`;
				courseElement.appendChild(courseText);

				const completeButton = document.createElement("button");
				completeButton.textContent = "Mark as complete";
				completeButton.classList.add("complete-button");
				completeButton.onclick = () => {
					completeCourse(course);
				}
				completeButton.style.display = "none";
				courseElement.appendChild(completeButton);
				

				courseElementMap[id] = courseElement;
				quarterDiv.appendChild(courseElement);
			}
		});

		container.appendChild(quarterDiv);
		refreshAllCourses();
	}
}

function refreshAllCourses() {
	for (const [courseId, courseElement] of Object.entries(courseElementMap)) {
		var course = courses[courseId];

		var completeButton = courseElement.querySelector(".complete-button");

		if (course.completed) {
			courseElement.classList.remove("highlight-grey");
			courseElement.classList.add("highlight-green");
			completeButton.style.display = "none";
		}
		else if (!course.canTake) {
			courseElement.classList.remove("highlight-green");
			courseElement.classList.add("highlight-grey");
			completeButton.style.display = "none";
			// gray out courses with prereqs
		} else  {
			courseElement.classList.remove("highlight-green");
			courseElement.classList.remove("highlight-grey");

			// add a complete button for classes that can be taken
			
			completeButton.style.display = "initial";
		}
	}
}

function completeCourse(completedCourse) {
	completedCourse.completed = true;

	refreshAllCourses();
}

document.addEventListener("DOMContentLoaded", () => {
	initializeCSDAASTCourses(); // Corrected function call
	renderCourses();
});
