window.addEventListener('load', () => {
	const form = document.querySelector("#new-plan-form");
	const input = document.querySelector("#new-plan-input");
	const list_el = document.querySelector("#plans");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const plan = input.value;

		const plan_el = document.createElement('div');
		plan_el.classList.add('plan');

		const plan_content_el = document.createElement('div');
		plan_content_el.classList.add('content');

		plan_el.appendChild(plan_content_el);

		const plan_input_el = document.createElement('input');
		plan_input_el.classList.add('text');
		plan_input_el.type = 'text';
		plan_input_el.value = plan;
		plan_input_el.setAttribute('readonly', 'readonly');

		plan_content_el.appendChild(plan_input_el);

		const plan_actions_el = document.createElement('div');
		plan_actions_el.classList.add('actions');
		
		const plan_edit_el = document.createElement('button');
		plan_edit_el.classList.add('edit');
		plan_edit_el.innerText = 'Edit';

		const plan_delete_el = document.createElement('button');
		plan_delete_el.classList.add('delete');
		plan_delete_el.innerText = 'Delete';

		plan_actions_el.appendChild(plan_edit_el);
		plan_actions_el.appendChild(plan_delete_el);

		plan_el.appendChild(plan_actions_el);

		list_el.appendChild(plan_el);

		input.value = '';

		plan_edit_el.addEventListener('click', (e) => {
			if (plan_edit_el.innerText.toLowerCase() == "edit") {
				plan_edit_el.innerText = "Save";
				plan_input_el.removeAttribute("readonly");
				plan_input_el.focus();
			} else {
				plan_edit_el.innerText = "Edit";
				plan_input_el.setAttribute("readonly", "readonly");
			}
		});

		plan_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(plan_el);
		});
	});
});