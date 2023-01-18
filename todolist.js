window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
        if(!task){
            alert('Please enter a task !!')
        }

		else { const task1 = document.createElement('div');
		task1.classList.add('task');

		const task1_content = document.createElement('div');
		task1_content.classList.add('content');

		task1.appendChild(task1_content);

		const task_input = document.createElement('input');
		task_input.classList.add('text');
		task_input.type = 'text';
		task_input.value = task;
		

		task1_content.appendChild(task_input);

		const task_actions = document.createElement('div');
		task_actions.classList.add('actions');


		const task_delete = document.createElement('button');
		task_delete.classList.add('delete');
		task_delete.innerText = 'Delete';
		

		let check = document.createElement('button');
		check.classList.add('check');
		check.innerText = 'Check';
		check.addEventListener("click",function(){
			task_input.style.textDecoration= "line-through";

			
		})
        task_actions.appendChild(task_delete);
        task_actions.appendChild(check);

		task1.appendChild(task_actions);
		list_el.appendChild(task1);

		input.value = '';
		task_delete.addEventListener('click', (e) => {
			list_el.removeChild(task1);
		});
		
	}});
});
