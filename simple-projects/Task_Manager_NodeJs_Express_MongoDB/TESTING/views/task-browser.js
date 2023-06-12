const input = document.querySelector(".task-input")
const tasksParent = document.querySelector(".tasks")
const submit_btn = document.querySelector(".submit-btn")
const form_alert = document.querySelector(".form-alert")
const task_form = document.querySelector(".task-form")
const delete_btn = document.querySelector('.delete-btn')


const GET_ALLTASK_URL = "http://localhost:3000/api/v1/tasks"


async function getAllTask() {


    try {

        const data = await fetch(GET_ALLTASK_URL, { method: "GET" })
        const{ tasks } = await data.json()
        
        const getTask = tasks.map((task, index) => {
            // return tasksParent.innerHTML += `...` <--- wrong way

            const{ name, _id, completed } = task

            return `
                <div class="single-task">
                    <h5>
                        <i class="far fa-check-circle check-mark"></i>
                        <p>${name}</p>
                    </h5>

                    <div class="task-links">
                        <a href="#" class="edit-link">
                            <i class="fas fa-edit"></i>
                        </a>

                        <i 
                        class="fas fa-trash delete-btn" 
                        data-id="${_id}"
                        >
                        </i>
                    </div>
                </div>
            `
            // <button 
            // type="button" 
            // class="delete-btn" 
            // data-id="${_id}"
            // >
            //     <i class="fas fa-trash" data-id="${_id}"></i>
            // </button>

            
        }).join('') // <---- important


        tasksParent.innerHTML = getTask
        // tasksParent.innerHTML += getTask <--- it will duplicate

        // console.log(tasks);


    } catch(err) {
        console.log(err);
    }


}

getAllTask()

task_form.addEventListener("submit", postTask)

async function postTask(e) {
    
    e.preventDefault()


    const data = { name:input.value }

    const option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },

        body: JSON.stringify(data)
    }



    try {
        // await data.json()
        const data = await fetch(GET_ALLTASK_URL, option)
        const{ tasks } = await data.json()
        input.value = ""
        getAllTask()


        // const addTask = tasks.map(task => {
            
        //     return `
        //         <div class="single-task">
        //             <h5>
        //                 <i class="far fa-check-circle check-mark"></i>
        //                 <p>${task.name}</p>
        //             </h5>

        //             <div class="task-links">
        //                 <a href="#" class="edit-link">
        //                     <i class="fas fa-edit"></i>
        //                 </a>

        //                 <button type="button" class="delete-btn">
        //                     <i class="fas fa-trash"></i>
        //                 </button>
        //             </div>
        //         </div>
        //     `
        // }).join('')



        // tasksParent.innerHTML = addTask 



    } catch(err) {
        console.log(err);
    }

}
 
    



tasksParent.addEventListener('click', async (e) => {
    const element = e.target
    // console.log(element.classList.contains('delete-btn'));


    if(element.classList.contains('delete-btn')) {
        // console.log(element.dataset.id);

        // const option = {
        //     method: "DELETE",
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify()
        // }


        const id = element.dataset.id

        try {
            const DELETE_TASK_URL = `http://localhost:3000/api/v1/tasks/${id}`
        
            const data = await fetch(DELETE_TASK_URL, { method:"DELETE" })
            await data.json()
            
            getAllTask()

        } catch(err) {
            console.log(err)
        }

    }

})
























// tasksParent.addEventListener('click', async (e) => {
//     console.log(e.target);
// })

